import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { PostStatusService } from './post-status.service';

@Controller(`${process.env.SERVICE_JOBS}/post-status`)
export class PostStatusHttpController extends StatusHttpController {
	constructor(
		protected service: PostStatusService,
	) {
		super();
	}
}
