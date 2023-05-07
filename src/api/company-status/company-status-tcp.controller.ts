import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { CompanyStatusService } from './company-status.service';

@Controller()
export class CompanyStatusTcpController extends StatusTcpController {
	constructor(
		protected service: CompanyStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'companyStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'companyStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('companyStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('companyStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('companyStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('companyStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
