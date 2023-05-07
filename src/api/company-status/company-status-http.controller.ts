import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { CompanyStatusService } from './company-status.service';

@Controller(`${process.env.SERVICE_JOBS}/company-status`)
export class CompanyStatusHttpController extends StatusHttpController {
	constructor(
		protected service: CompanyStatusService,
	) {
		super();
	}
}
