import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { Many } from '@nest-datum/many';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';
import { Company } from '../company/company.entity';

@Entity()
export class CompanyCompanyCompanyOption extends Many {
	@Column()
	public companyCompanyOptionId: string;

	@ManyToOne(() => CompanyCompanyOption, (companyCompanyOption) => companyCompanyOption.companyCompanyCompanyOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public companyCompanyOption: CompanyCompanyOption;

	@Column()
	public companyId: string;

	@ManyToOne(() => Company, (company) => company.companyCompanyCompanyOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public company: Company;
}
