import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_JOBS}/category-status`)
export class CategoryStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_JOBS;
	protected readonly entityName: string = 'categoryStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
