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
import { TagStatusService } from './tag-status.service';
import { TagStatusHttpController } from './tag-status-http.controller';
import { TagStatus } from './tag-status.entity';

@Module({
	controllers: [ TagStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ TagStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		TagStatusService, 
	],
})
export class TagStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
