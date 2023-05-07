import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { OptionTcpController } from '@nest-datum/option';
import { CompanyOptionService } from './company-option.service';

@Controller()
export class CompanyOptionTcpController extends OptionTcpController {
	constructor(
		protected service: CompanyOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'companyOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'companyOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('companyOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('companyOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('companyOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('companyOption.update')
	async update(payload) {
		return await super.update(payload);
	}

	@EventPattern('company.content')
	async content(payload) {
		return await super.content(payload);
	}

	@EventPattern('company.contentUpdate')
	async contentUpdate(payload) {
		return await super.contentUpdate(payload);
	}
}
