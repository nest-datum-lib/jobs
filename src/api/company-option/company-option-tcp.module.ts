import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { CompanyOptionService } from './company-option.service';
import { CompanyOptionTcpController } from './company-option-tcp.controller';
import { CompanyCompanyCompanyOption } from '../company-company-company-option/company-company-company-option.entity';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';
import { Company } from '../company/company.entity';
import { PostContent } from '../post-content/post-content.entity';
import { CompanyOption } from './company-option.entity';

@Module({
	controllers: [
		CompanyOptionTcpController, 
	],
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
export class CompanyOptionTcpModule {
}
