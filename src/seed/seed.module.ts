import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlConfig as utilsFormatSqlConfig } from '@nest-datum-utils/format';

import { SeedService } from './seed.service';
import { CategorySeeder } from './category.seeder';
import { CategoryStatusSeeder } from './category-status.seeder';
import { PostStatusSeeder } from './post-status.seeder';
import { CompanyStatusSeeder } from './company-status.seeder';
import { PostSeeder } from './post.seeder';
import { CompanySeeder } from './company.seeder';

import { Category } from '../api/category/category.entity';
import { CategoryCategoryCategoryOption } from '../api/category-category-category-option/category-category-category-option.entity';
import { CategoryCategoryOption } from '../api/category-category-option/category-category-option.entity';
import { CategoryOption } from '../api/category-option/category-option.entity';
import { Post } from '../api/post/post.entity';
import { CategoryStatus } from '../api/category-status/category-status.entity';
import { PostOption } from '../api/post-option/post-option.entity';
import { PostPostPostOption } from '../api/post-post-post-option/post-post-post-option.entity';
import { PostPostOption } from '../api/post-post-option/post-post-option.entity';
import { PostContent } from '../api/post-content/post-content.entity';
import { PostStatus } from '../api/post-status/post-status.entity';
import { CompanyStatus } from '../api/company-status/company-status.entity';
import { Company } from '../api/company/company.entity';
import { CompanyCompanyCompanyOption } from '../api/company-company-company-option/company-company-company-option.entity';
import { CompanyCompanyOption } from '../api/company-company-option/company-company-option.entity';
import { CompanyOption } from '../api/company-option/company-option.entity';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forRoot(utilsFormatSqlConfig()),
		TypeOrmModule.forFeature([
			CompanyCompanyCompanyOption,
			CompanyCompanyOption,
			CompanyOption,
			Company,
			CompanyStatus,
			PostStatus,
			CategoryStatus,
			Category,
			CategoryCategoryCategoryOption,
			CategoryCategoryOption,
			CategoryOption,
			PostPostPostOption,
			PostPostOption,
			PostOption,
			PostContent,
			Post
		]),
	],
	providers: [
		SeedService,
		PostStatusSeeder,
		CompanyStatusSeeder,
		CompanySeeder,
		CategoryStatusSeeder,
		CategorySeeder,
		PostSeeder
	]
})

export class SeedModule {
}
