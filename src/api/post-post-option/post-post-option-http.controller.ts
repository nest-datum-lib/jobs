import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { PostPostOptionService } from './post-post-option.service';

@Controller(`${process.env.SERVICE_JOBS}/post/option`)
export class PostPostOptionHttpController extends BindHttpController {
	constructor(
		protected service: PostPostOptionService,
	) {
		super();
	}
}
