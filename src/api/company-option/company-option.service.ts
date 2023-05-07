import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';
import { CompanyCompanyCompanyOption } from '../company-company-company-option/company-company-company-option.entity';
import { CompanyOption } from './company-option.entity';

@Injectable()
export class CompanyOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'companyId';
	protected readonly optionRelationColumnName: string = 'companyOptionId';
	protected readonly optionContentColumnName: string = 'companyCompanyOptionId';
	protected readonly repositoryConstructor = CompanyOption;
	protected readonly repositoryOptionConstructor = CompanyCompanyOption;
	protected readonly repositoryContentOptionConstructor = CompanyCompanyCompanyOption;

	constructor(
		@InjectRepository(CompanyOption) protected readonly repository: Repository<CompanyOption>,
		@InjectRepository(CompanyCompanyOption) public readonly repositoryOption: Repository<CompanyCompanyOption>,
		@InjectRepository(CompanyCompanyCompanyOption) public readonly repositoryContentOption: Repository<CompanyCompanyCompanyOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
