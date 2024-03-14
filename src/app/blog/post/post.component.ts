import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { LikesService } from '../likes.service';

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

  private _likeService = inject(LikesService);

  public likes = 0;

  public liked(event: boolean) {
    if (event) this.likes++;
    else this.likes--;
    this._likeService.totalLikes = this.likes;
  }
}
