import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionHttpTcpController } from '@nest-datum/option';

@Controller(`${process.env.SERVICE_JOBS}/post-option`)
export class PostOptionHttpTcpController extends OptionHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_JOBS;
	protected readonly entityName: string = 'postOption';
	
	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
