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
import { CompanyStatusService } from './company-status.service';
import { CompanyStatusHttpController } from './company-status-http.controller';
import { CompanyStatus } from './company-status.entity';

@Module({
	controllers: [ CompanyStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ CompanyStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		CompanyStatusService, 
	],
})
export class CompanyStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
