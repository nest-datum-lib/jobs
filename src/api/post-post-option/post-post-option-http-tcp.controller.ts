import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_JOBS}/post/option`)
export class PostPostOptionHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_JOBS;
	protected readonly entityName: string = 'postOptionRelation';
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'postOptionId';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
