import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { CategoryOptionService } from './category-option.service';
import { CategoryOptionTcpController } from './category-option-tcp.controller';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';
import { Category } from '../category/category.entity';
import { CategoryOption } from './category-option.entity';

@Module({
	controllers: [
		CategoryOptionTcpController, 
	],
	imports: [
		TypeOrmModule.forFeature([ 
			CategoryOption,
			CategoryCategoryOption,
			Category,
			CategoryCategoryCategoryOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		CategoryOptionService,
	],
})
export class CategoryOptionTcpModule {
}
