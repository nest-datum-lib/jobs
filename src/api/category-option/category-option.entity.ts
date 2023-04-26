import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';

@Entity()
export class CategoryOption extends Option {
	@OneToMany(() => CategoryCategoryOption, (categoryCategoryOption) => categoryCategoryOption.categoryOption)
	public categoryCategoryOptions: CategoryCategoryOption[];
}
