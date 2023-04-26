import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { TagStatusService } from './tag-status.service';

@Controller(`${process.env.SERVICE_JOBS}/tag-status`)
export class TagStatusHttpController extends StatusHttpController {
	constructor(
		protected service: TagStatusService,
	) {
		super();
	}
}
