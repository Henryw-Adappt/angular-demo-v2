import { Component, inject } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Post } from '../post/post';
import { LikesService } from '../likes.service';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [PostComponent],
  providers: [LikesService],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {
  public posts: Post[] = [
    { text: 'Our first post', comments: ['Wow!'] },
    { text: 'Our first post', comments: ['Wow!'] },
  ];

  public likesService = inject(LikesService);
}
