import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { TagStatusService } from './tag-status.service';

@Controller()
export class TagStatusTcpController extends StatusTcpController {
	constructor(
		protected service: TagStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'tagStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'tagStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('tagStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('tagStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('tagStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('tagStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
