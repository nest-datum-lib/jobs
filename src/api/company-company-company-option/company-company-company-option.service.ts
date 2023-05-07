import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { CompanyCompanyCompanyOption } from './company-company-company-option.entity';

@Injectable()
export class CompanyCompanyCompanyOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'companyId';
	protected readonly optionRelationColumnName: string = 'companyCompanyOptionId';
	protected readonly repositoryConstructor = CompanyCompanyCompanyOption;

	constructor(
		@InjectRepository(CompanyCompanyCompanyOption) protected readonly repository: Repository<CompanyCompanyCompanyOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
