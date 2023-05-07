import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { CompanyCompanyCompanyOption } from '../company-company-company-option/company-company-company-option.entity';
import { CompanyOption } from '../company-option/company-option.entity';
import { Company } from '../company/company.entity';

@Entity()
export class CompanyCompanyOption extends Bind {
	@Column()
	public companyOptionId: string;

	@ManyToOne(() => CompanyOption, (companyOption) => companyOption.companyCompanyOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public companyOption: CompanyOption;

	@Column()
	public companyId: string;

	@ManyToOne(() => Company, (company) => company.companyCompanyOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public company: Company;

	@OneToMany(() => CompanyCompanyCompanyOption, (companyCompanyCompanyOption) => companyCompanyCompanyOption.companyCompanyOption, {
		cascade: true,
	})
	public companyCompanyCompanyOptions: CompanyCompanyCompanyOption[];
}
