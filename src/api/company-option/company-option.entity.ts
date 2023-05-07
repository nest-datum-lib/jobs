import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';

@Entity()
export class CompanyOption extends Option {
	@OneToMany(() => CompanyCompanyOption, (companyCompanyOption) => companyCompanyOption.companyOption, {
		cascade: true,
	})
	public companyCompanyOptions: CompanyCompanyOption[];
}
