import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	MethodNotAllowedException,
	UnauthorizedException,
} from '@nestjs/common';
import { AccessToken } from '@nest-datum-common/decorators';
import { HttpController } from '@nest-datum-common/controllers';
import { 
	checkToken,
	getUser, 
} from '@nest-datum-common/jwt';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	arr as utilsCheckArr,
} from '@nest-datum-utils/check';
import { TagTagOptionService } from '../tag-tag-option/tag-tag-option.service';
import { TagService } from './tag.service';

@Controller(`${process.env.SERVICE_JOBS}/tag`)
export class TagHttpController extends HttpController {
	protected readonly mainRelationColumnName: string = 'tagId';
	protected readonly optionRelationColumnName: string = 'tagOptionId';

	constructor(
		protected service: TagService,
		protected readonly serviceOptionContent: TagTagOptionService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['tagStatusId'])) {
			throw new MethodNotAllowedException(`Property "tagStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
		}
		if (utilsCheckExists(options['tagStatusId'])) {
			if (!utilsCheckStrId(options['tagStatusId'])) {
				throw new MethodNotAllowedException(`Property "tagStatusId" is not valid.`);
			}
			output['tagStatusId'] = options['tagStatusId'];
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

	async validateOptions(options) {
		if (!checkToken(options['accessToken'], process.env.JWT_SECRET_ACCESS_KEY)) {
			throw new UnauthorizedException(`User is undefined or token is not valid.`)
		}
		const user = getUser(options['accessToken']);

		if (!utilsCheckStrId(options['id'])) {
			throw new MethodNotAllowedException(`Property "id" is nt valid.`);
		}
		try {
			options['data'] = JSON.parse(options['data']);
		}
		catch (err) {
		}
		if (!utilsCheckArr(options['data'])) {
			throw new MethodNotAllowedException(`Property "data" is nt valid.`);
		}
		return {
			accessToken: options['accessToken'],
			userId: user['id'],
			id: options['id'],
			data: options['data'],
		};
	}

	async validateUpdateContent(options) : Promise<any> {
		if (!utilsCheckStrId(options['id'])) {
			throw new MethodNotAllowedException(`Property "id" is nt valid.`);
		}

		return {
			id: options['id'],
			content: String(options['content'] ?? ''),
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('tagStatusId') tagStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			id,
			userId,
			tagStatusId,
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
		@Body('tagStatusId') tagStatusId: string,
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
			tagStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}

	@Post(':id/options')
	async createOptions(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body() data,
	) {
		return await this.serviceHandlerWrapper(async () => await this.serviceOptionContent.content(await this.validateOptions({
			accessToken,
			id,
			data,
		})));
	}

	@Patch(':id/option')
	async updateContent(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('content') content: string,
	) {
		return await this.serviceHandlerWrapper(async () => await this.serviceOptionContent.update(await this.validateUpdateContent({
			accessToken,
			id,
			content,
		})));
	}
}
