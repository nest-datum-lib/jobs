import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_JOBS}/company-status`)
export class CompanyStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_JOBS;
	protected readonly entityName: string = 'companyStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
