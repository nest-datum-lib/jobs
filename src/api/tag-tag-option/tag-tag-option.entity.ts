import { 
	Entity, 
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { TagOption } from '../tag-option/tag-option.entity';
import { Tag } from '../tag/tag.entity';

@Entity()
export class TagTagOption {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public parentId: string;

	@Column()
	public tagOptionId: string;

	@ManyToOne(() => TagOption, (tagOption) => tagOption.tagTagOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public tagOption: TagOption;

	@Column()
	public tagId: string;

	@ManyToOne(() => Tag, (tag) => tag.tagTagOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public tag: Tag;

	@Column('text')
	public content: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

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
}
