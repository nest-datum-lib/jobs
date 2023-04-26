import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { TcpController } from '@nest-datum-common/controllers';
import { TransportService } from '@nest-datum/transport';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
} from '@nest-datum-utils/check';
import { TagService } from './tag.service';

@Controller()
export class TagTcpController extends TcpController {
	constructor(
		protected service: TagService,
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

	@MessagePattern({ cmd: 'tag.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'tag.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('tag.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('tag.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('tag.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('tag.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
