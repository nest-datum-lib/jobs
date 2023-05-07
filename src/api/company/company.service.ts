import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';
import { Company } from './company.entity';

@Injectable()
export class CompanyService extends MainService {
	protected readonly withEnvKey: boolean = false;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = Company;
	protected readonly repositoryBindOptionConstructor = CompanyCompanyOption;
	protected readonly mainRelationColumnName: string = 'companyId';
	protected readonly optionRelationColumnName: string = 'companyOptionId';

	constructor(
		@InjectRepository(Company) protected readonly repository: Repository<Company>,
		@InjectRepository(CompanyCompanyOption) protected repositoryBindOption: Repository<CompanyCompanyOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			companyStatusId: true,
			name: true,
			description: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			companyStatusId: true,
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
