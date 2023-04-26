import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_JOBS}/tag-status`)
export class TagStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_JOBS;
	protected readonly entityName: string = 'tagStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
