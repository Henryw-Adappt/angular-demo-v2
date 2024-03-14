import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Post } from '../post/post';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {
  public posts: Post[] = [{ text: 'Our first post', comments: ['Wow!'] }];
}
