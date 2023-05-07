import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_JOBS}/company/option`)
export class CompanyCompanyOptionHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_JOBS;
	protected readonly entityName: string = 'companyOptionRelation';
	protected readonly mainRelationColumnName: string = 'companyId';
	protected readonly optionRelationColumnName: string = 'companyOptionId';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
