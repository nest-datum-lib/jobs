import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	MethodNotAllowedException,
} from '@nestjs/common';
import { AccessToken } from '@nest-datum-common/decorators';
import { MainHttpController } from '@nest-datum/main';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
} from '@nest-datum-utils/check';
import { PostPostOptionService } from '../post-post-option/post-post-option.service';
import { PostPostPostOptionService } from '../post-post-post-option/post-post-post-option.service';
import { PostService } from './post.service';

@Controller(`${process.env.SERVICE_JOBS}/post`)
export class PostHttpController extends MainHttpController {
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'postOptionId';

	constructor(
		protected service: PostService,
		protected readonly serviceOptionContent: PostPostPostOptionService,
		protected readonly serviceOptionRelation: PostPostOptionService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['postStatusId'])) {
			throw new MethodNotAllowedException(`Property "postStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['categoryId'])) {
			throw new MethodNotAllowedException(`Property "categoryId" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['categoryId'])) {
			if (!utilsCheckStrId(options['categoryId'])) {
				throw new MethodNotAllowedException(`Property "categoryId" is not valid.`);
			}
			output['categoryId'] = options['categoryId'];
		}
		if (utilsCheckExists(options['postStatusId'])) {
			if (!utilsCheckStrId(options['postStatusId'])) {
				throw new MethodNotAllowedException(`Property "postStatusId" is not valid.`);
			}
			output['postStatusId'] = options['postStatusId'];
		}
		if (utilsCheckExists(options['name'])) {
			if (!utilsCheckStrName(options['name'])) {
				throw new MethodNotAllowedException(`Property "name" is not valid.`);
			}
			output['name'] = options['name'];
		}
		if (utilsCheckExists(options['description'])) {
			if (!utilsCheckStrDescription(options['description'])) {
				throw new MethodNotAllowedException(`Property "description" is not valid.`);
			}
			output['description'] = options['description'];
		}
		return {
			...await super.validateUpdate(options),
			...output,
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('categoryId') categoryId: string,
		@Body('postStatusId') postStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			id,
			userId,
			categoryId,
			postStatusId,
			name,
			description,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('categoryId') categoryId: string,
		@Body('postStatusId') postStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.update(await this.validateUpdate({
			accessToken,
			id,
			newId,
			userId,
			categoryId,
			postStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
