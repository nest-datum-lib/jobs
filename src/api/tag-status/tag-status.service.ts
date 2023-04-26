import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { TagStatus } from './tag-status.entity';

@Injectable()
export class TagStatusService extends StatusService {
	protected readonly entityName: string = 'tagStatus';
	protected readonly repositoryConstructor = TagStatus;

	constructor(
		@InjectRepository(TagStatus) protected readonly repository: Repository<TagStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
