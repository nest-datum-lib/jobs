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
import { CompanyCompanyOptionService } from './company-company-option.service';
import { CompanyCompanyOptionHttpController } from './company-company-option-http.controller';
import { CompanyCompanyCompanyOption } from '../company-company-company-option/company-company-company-option.entity';
import { CompanyOption } from '../company-option/company-option.entity';
import { Company } from '../company/company.entity';
import { CompanyCompanyOption } from './company-company-option.entity';

@Module({
	controllers: [ CompanyCompanyOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
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
	],
})
export class CompanyCompanyOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
