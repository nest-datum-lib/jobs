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
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TagService } from './tag.service';
import { TagTcpController } from './tag-tcp.controller';
import { TagOption } from '../tag-option/tag-option.entity';
import { TagTagOption } from '../tag-tag-option/tag-tag-option.entity';
import { Tag } from './tag.entity';

@Module({
	controllers: [ TagTcpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TagOption,
			TagTagOption,
			Tag,
		]),
		TransportModule,
		CacheModule,
	],
	providers: [ 
		TransportService,
		CacheService,
		TagService,
	],
})
export class TagTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
