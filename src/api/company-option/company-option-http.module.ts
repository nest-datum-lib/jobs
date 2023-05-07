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
import { CompanyOptionService } from './company-option.service';
import { CompanyOptionHttpController } from './company-option-http.controller';
import { CompanyCompanyCompanyOption } from '../company-company-company-option/company-company-company-option.entity';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';
import { Company } from '../company/company.entity';
import { PostContent } from '../post-content/post-content.entity';
import { CompanyOption } from './company-option.entity';

@Module({
	controllers: [ CompanyOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			PostContent,
			CompanyOption,
			CompanyCompanyOption,
			Company,
			CompanyCompanyCompanyOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		CompanyOptionService,
	],
})
export class CompanyOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
