import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TagTagOption } from '../tag-tag-option/tag-tag-option.entity';
import { TagOption } from './tag-option.entity';

@Injectable()
export class TagOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'tagId';
	protected readonly optionRelationColumnName: string = 'tagOptionId';
	protected readonly optionContentColumnName: string = 'tagOptionId';
	protected readonly repositoryConstructor = TagOption;
	protected readonly repositoryOptionConstructor = TagTagOption;
	protected readonly repositoryContentOptionConstructor = TagTagOption;

	constructor(
		@InjectRepository(TagOption) protected readonly repository: Repository<TagOption>,
		@InjectRepository(TagTagOption) public readonly repositoryOption: Repository<TagTagOption>,
		@InjectRepository(TagTagOption) public readonly repositoryContentOption: Repository<TagTagOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
