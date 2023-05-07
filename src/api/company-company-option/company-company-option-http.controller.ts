import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { CompanyCompanyOptionService } from './company-company-option.service';

@Controller(`${process.env.SERVICE_JOBS}/company/option`)
export class CompanyCompanyOptionHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'companyId';
	protected readonly optionRelationColumnName: string = 'companyOptionId';
	
	constructor(
		protected service: CompanyCompanyOptionService,
	) {
		super();
	}
}
