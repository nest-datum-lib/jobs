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
import { TagOptionService } from './tag-option.service';
import { TagOptionHttpController } from './tag-option-http.controller';
import { TagTagOption } from '../tag-tag-option/tag-tag-option.entity';
import { Tag } from '../tag/tag.entity';
import { TagOption } from './tag-option.entity';

@Module({
	controllers: [ TagOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TagOption,
			TagTagOption,
			Tag, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		TagOptionService,
	],
})
export class TagOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
