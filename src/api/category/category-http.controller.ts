import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	MethodNotAllowedException,
} from '@nestjs/common';
import { checkToken } from '@nest-datum-common/jwt';
import { AccessToken } from '@nest-datum-common/decorators';
import { MainHttpController } from '@nest-datum/main';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
} from '@nest-datum-utils/check';
import { CategoryCategoryOptionService } from '../category-category-option/category-category-option.service';
import { CategoryCategoryCategoryOptionService } from '../category-category-category-option/category-category-category-option.service';
import { CategoryService } from './category.service';

@Controller(`${process.env.SERVICE_JOBS}/category`)
export class CategoryHttpController extends MainHttpController {
	protected readonly mainRelationColumnName: string = 'categoryId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';

	constructor(
		protected service: CategoryService,
		protected readonly serviceOptionContent: CategoryCategoryCategoryOptionService,
		protected readonly serviceOptionRelation: CategoryCategoryOptionService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['categoryStatusId'])) {
			throw new MethodNotAllowedException(`Property "categoryStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckStrFilled(options['categoryStatusId'])) {
			if (!utilsCheckStrId(options['categoryStatusId'])) {
				throw new MethodNotAllowedException(`Property "categoryStatusId" is not valid.`);
			}
			output['categoryStatusId'] = options['categoryStatusId'];
		}
		if (utilsCheckStrFilled(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
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
		@Body('categoryStatusId') categoryStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			id,
			userId,
			categoryStatusId,
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
		@Body('categoryStatusId') categoryStatusId: string,
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
			categoryStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
