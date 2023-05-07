import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	MethodNotAllowedException,
} from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { AccessToken } from '@nest-datum-common/decorators';
import { MainHttpTcpController } from '@nest-datum/main';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail,
	strEnvKey as utilsCheckStrEnvKey,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_JOBS}/category`)
export class CategoryHttpTcpController extends MainHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_JOBS;
	protected readonly entityName: string = 'category';
	protected readonly entityManyName: string = 'categoryOptionRelation';
	protected readonly mainRelationColumnName: string = 'categoryId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';

	constructor(
		protected transport: TransportService,
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

		if (utilsCheckExists(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
		}
		if (utilsCheckExists(options['categoryStatusId'])) {
			if (!utilsCheckStrId(options['categoryStatusId'])) {
				throw new MethodNotAllowedException(`Property "categoryStatusId" is not valid.`);
			}
			output['categoryStatusId'] = options['categoryStatusId'];
		}
		if (utilsCheckExists(options['parentId'])) {
			if (!utilsCheckStrId(options['parentId'])) {
				throw new MethodNotAllowedException(`Property "parentId" is not valid.`);
			}
			output['parentId'] = options['parentId'];
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
		@Body('parentId') parentId: string,
		@Body('categoryStatusId') categoryStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(
			async () => await this.transport.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			parentId,
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
		@Body('parentId') parentId: string,
		@Body('categoryStatusId') categoryStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(
			async () => await this.transport.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateUpdate({
			accessToken,
			id,
			newId,
			userId,
			parentId,
			categoryStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
