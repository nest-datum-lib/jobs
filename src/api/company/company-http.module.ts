import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { CompanyService } from './company.service';
import { CompanyHttpController } from './company-http.controller';
import { Post } from '../post/post.entity';
import { CompanyCompanyOptionService } from '../company-company-option/company-company-option.service';
import { CompanyCompanyCompanyOptionService } from '../company-company-company-option/company-company-company-option.service';
import { CompanyCompanyCompanyOption } from '../company-company-company-option/company-company-company-option.entity';
import { CompanyOption } from '../company-option/company-option.entity';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';
import { Company } from './company.entity';

@Module({
	controllers: [ CompanyHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Post,
			CompanyOption,
			CompanyCompanyOption,
			Company,
			CompanyCompanyCompanyOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		CompanyCompanyOptionService,
		CompanyCompanyCompanyOptionService,
		CompanyService,
	],
})
export class CompanyHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
