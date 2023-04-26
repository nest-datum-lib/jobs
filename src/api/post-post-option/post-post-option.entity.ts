import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { PostPostPostOption } from '../post-post-post-option/post-post-post-option.entity';
import { PostOption } from '../post-option/post-option.entity';
import { Post } from '../post/post.entity';

@Entity()
export class PostPostOption extends Bind {
	@Column()
	public postOptionId: string;

	@ManyToOne(() => PostOption, (postOption) => postOption.postPostOptions)
	public postOption: PostOption;

	@Column()
	public postId: string;

	@ManyToOne(() => Post, (post) => post.postPostOptions)
	public post: Post;

	@OneToMany(() => PostPostPostOption, (postPostPostOption) => postPostPostOption.postPostOption)
	public postPostPostOptions: PostPostPostOption[];
}
