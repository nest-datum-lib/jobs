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
import { TagTagOptionService } from '../tag-tag-option/tag-tag-option.service';
import { TagService } from './tag.service';
import { TagHttpController } from './tag-http.controller';
import { TagOption } from '../tag-option/tag-option.entity';
import { TagTagOption } from '../tag-tag-option/tag-tag-option.entity';
import { Tag } from './tag.entity';

@Module({
	controllers: [ TagHttpController ],
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
		TagTagOptionService,
		TagService,
	],
})
export class TagHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
