import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { TagTagOption } from '../tag-tag-option/tag-tag-option.entity';

@Entity()
export class TagOption extends Option {
	@OneToMany(() => TagTagOption, (tagTagOption) => tagTagOption.tagOption, {
		cascade: true,
	})
	public tagTagOptions: TagTagOption[];
}
