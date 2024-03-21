import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  private _likes = 0;
  public get likes() {
    return this._likes;
  }
  public set likes(likes: number) {
    this._likes = likes;
  }

  public like() {
    this._likes++;
  }
}
