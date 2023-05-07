import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { TcpController } from '@nest-datum-common/controllers';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
} from '@nest-datum-utils/check';
import { CompanyService } from './company.service';

@Controller()
export class CompanyTcpController extends TcpController {
	constructor(
		protected service: CompanyService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['companyStatusId'])) {
			throw new MethodNotAllowedException(`Property "companyStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckStrFilled(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
		}
		if (utilsCheckStrFilled(options['companyStatusId'])) {
			if (!utilsCheckStrId(options['companyStatusId'])) {
				throw new MethodNotAllowedException(`Property "companyStatusId" is not valid.`);
			}
			output['companyStatusId'] = options['companyStatusId'];
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

	@MessagePattern({ cmd: 'company.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'company.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('company.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('company.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('company.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('company.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
