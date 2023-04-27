import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { OptionTcpController } from '@nest-datum/option';
import { TagOptionService } from './tag-option.service';

@Controller()
export class TagOptionTcpController extends OptionTcpController {
	constructor(
		protected service: TagOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'tagOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'tagOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('tagOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('tagOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('tagOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('tagOption.update')
	async update(payload) {
		return await super.update(payload);
	}

	@EventPattern('tag.content')
	async content(payload) {
		return await super.content(payload);
	}

	@EventPattern('tag.updateContent')
	async updateContent(payload) {
		return await super.updateContent(payload);
	}
}
