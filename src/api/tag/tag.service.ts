import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { TagTagOption } from '../tag-tag-option/tag-tag-option.entity';
import { Tag } from './tag.entity';

@Injectable()
export class TagService extends MainService {
	protected readonly withEnvKey: boolean = false;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = Tag;
	protected readonly repositoryBindOptionConstructor = TagTagOption;
	protected readonly mainRelationColumnName: string = 'tagId';
	protected readonly optionRelationColumnName: string = 'tagOptionId';

	constructor(
		@InjectRepository(Tag) protected readonly repository: Repository<Tag>,
		@InjectRepository(TagTagOption) protected repositoryBindOption: Repository<TagTagOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			tagStatusId: true,
			name: true,
			description: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			tagStatusId: true,
			name: true,
			description: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			name: true,
			description: true,
		});
	}
}
