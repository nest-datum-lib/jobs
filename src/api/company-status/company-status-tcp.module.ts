import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { CompanyStatusService } from './company-status.service';
import { CompanyStatusTcpController } from './company-status-tcp.controller';
import { CompanyStatus } from './company-status.entity';

@Module({
	controllers: [ CompanyStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ CompanyStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		CompanyStatusService, 
	],
})
export class CompanyStatusTcpModule {
}

