import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { BindTcpController } from '@nest-datum/bind';
import { CompanyCompanyOptionService } from './company-company-option.service';

@Controller()
export class CompanyCompanyOptionTcpController extends BindTcpController {
	protected readonly mainRelationColumnName: string = 'companyId';
	protected readonly optionRelationColumnName: string = 'companyOptionId';
	
	constructor(
		protected service: CompanyCompanyOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'companyOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'companyOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('companyOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('companyOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('companyOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
