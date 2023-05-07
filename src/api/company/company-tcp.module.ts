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
import { CompanyTcpController } from './company-tcp.controller';
import { Post } from '../post/post.entity';
import { CompanyCompanyCompanyOption } from '../company-company-company-option/company-company-company-option.entity';
import { CompanyOption } from '../company-option/company-option.entity';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';
import { Company } from './company.entity';

@Module({
	controllers: [ CompanyTcpController ],
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
		CompanyService,
	],
})
export class CompanyTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
