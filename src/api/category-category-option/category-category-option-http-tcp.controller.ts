import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_JOBS}/category/option`)
export class CategoryCategoryOptionHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_JOBS;
	protected readonly entityName: string = 'categoryOptionRelation';
	protected readonly mainRelationColumnName: string = 'categoryId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
