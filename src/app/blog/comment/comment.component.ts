import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment = '';

  @Output() liked = new EventEmitter<boolean>();

  public like() {
    this.liked.emit(true);
  }
}
