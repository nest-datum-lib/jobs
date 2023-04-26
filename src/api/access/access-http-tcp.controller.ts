import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { AccessHttpTcpController as AccessHttpTcpControllerBase } from '@nest-datum/access';

@Controller(`${process.env.SERVICE_JOBS}/access`)
export class AccessHttpTcpController extends AccessHttpTcpControllerBase {
	protected readonly serviceName: string = process.env.SERVICE_JOBS;
	
	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
