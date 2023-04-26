import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { TagOptionService } from './tag-option.service';
import { TagOptionTcpController } from './tag-option-tcp.controller';
import { TagTagOption } from '../tag-tag-option/tag-tag-option.entity';
import { Tag } from '../tag/tag.entity';
import { TagOption } from './tag-option.entity';

@Module({
	controllers: [
		TagOptionTcpController, 
	],
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
export class TagOptionTcpModule {
}
