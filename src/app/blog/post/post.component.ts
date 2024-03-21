import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() public text = 'Foo';

  @Input() public comments: string[] = [];

  public likes = 0;

  public liked(event: boolean) {
    if (event) this.likes++;
    else this.likes--;
  }
}
