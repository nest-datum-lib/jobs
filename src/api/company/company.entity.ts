import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
	OneToMany,
} from 'typeorm';
import {
	IsEmail,
} from 'class-validator';
import { CompanyCompanyCompanyOption } from '../company-company-company-option/company-company-company-option.entity';
import { CompanyCompanyOption } from '../company-company-option/company-company-option.entity';
import { Post } from '../post/post.entity';

@Entity()
export class Company {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public companyStatusId: string;

	@Column()
	@Index({ unique: true })
	public name: string;

	@Column({ default: '' })
	@Index()
	public description: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

	@Column('boolean', { default: false })
	public isNotDelete: boolean = false;

	@CreateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP', 
	})
	public createdAt: Date;

	@UpdateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP',
		onUpdate: 'CURRENT_TIMESTAMP', 
	})
	public updatedAt: Date;

	@OneToMany(() => CompanyCompanyOption, (companyCompanyOption) => companyCompanyOption.company, {
		cascade: true,
	})
	public companyCompanyOptions: CompanyCompanyOption[];

	@OneToMany(() => CompanyCompanyCompanyOption, (companyCompanyCompanyOption) => companyCompanyCompanyOption.company, {
		cascade: true,
	})
	public companyCompanyCompanyOptions: CompanyCompanyCompanyOption[];

	@OneToMany(() => Post, (post) => post.company, {
		cascade: true,
	})
	public posts: Post[];
}
