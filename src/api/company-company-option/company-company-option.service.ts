import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { CompanyCompanyOption } from './company-company-option.entity';


export class CompanyCompanyOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'companyId';
	protected readonly optionRelationColumnName: string = 'companyOptionId';
	protected repositoryConstructor = CompanyCompanyOption;
	
	constructor(
		@InjectRepository(CompanyCompanyOption) protected repository: Repository<CompanyCompanyOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
