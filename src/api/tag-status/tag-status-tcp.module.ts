import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { TagStatusService } from './tag-status.service';
import { TagStatusTcpController } from './tag-status-tcp.controller';
import { TagStatus } from './tag-status.entity';

@Module({
	controllers: [ TagStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ TagStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		TagStatusService, 
	],
})
export class TagStatusTcpModule {
}

