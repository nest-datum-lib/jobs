import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { CompanyOptionService } from './company-option.service';

@Controller(`${process.env.SERVICE_JOBS}/company-option`)
export class CompanyOptionHttpController extends OptionHttpController {
	constructor(
		protected service: CompanyOptionService,
	) {
		super();
	}
}
