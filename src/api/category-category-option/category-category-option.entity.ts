import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryOption } from '../category-option/category-option.entity';
import { Category } from '../category/category.entity';

@Entity()
export class CategoryCategoryOption extends Bind {
	@Column()
	public categoryOptionId: string;

	@ManyToOne(() => CategoryOption, (categoryOption) => categoryOption.categoryCategoryOptions)
	public categoryOption: CategoryOption;

	@Column()
	public categoryId: string;

	@ManyToOne(() => Category, (category) => category.categoryCategoryOptions)
	public category: Category;

	@OneToMany(() => CategoryCategoryCategoryOption, (categoryCategoryCategoryOption) => categoryCategoryCategoryOption.categoryCategoryOption)
	public categoryCategoryCategoryOptions: CategoryCategoryCategoryOption[];
}
