import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { TagTagOption } from './tag-tag-option.entity';

@Injectable()
export class TagTagOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'tagId';
	protected readonly optionRelationColumnName: string = 'tagTagOptionId';
	protected readonly repositoryConstructor = TagTagOption;

	constructor(
		@InjectRepository(TagTagOption) protected readonly repository: Repository<TagTagOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
