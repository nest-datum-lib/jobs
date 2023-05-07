import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { CompanyStatus } from './company-status.entity';

@Injectable()
export class CompanyStatusService extends StatusService {
	protected readonly entityName: string = 'companyStatus';
	protected readonly repositoryConstructor = CompanyStatus;

	constructor(
		@InjectRepository(CompanyStatus) protected readonly repository: Repository<CompanyStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
