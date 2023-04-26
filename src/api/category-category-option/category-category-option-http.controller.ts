import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { CategoryCategoryOptionService } from './category-category-option.service';

@Controller(`${process.env.SERVICE_JOBS}/category/option`)
export class CategoryCategoryOptionHttpController extends BindHttpController {
	constructor(
		protected service: CategoryCategoryOptionService,
	) {
		super();
	}
}
