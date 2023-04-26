import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { TagOptionService } from './tag-option.service';

@Controller(`${process.env.SERVICE_JOBS}/tag-option`)
export class TagOptionHttpController extends OptionHttpController {
	constructor(
		protected service: TagOptionService,
	) {
		super();
	}
}
