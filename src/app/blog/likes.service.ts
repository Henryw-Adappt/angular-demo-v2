import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LikesService implements OnDestroy {
  private _destroy$ = new Subject<boolean>();

  private _liked$ = new Subject<number>();

  private _likes = 0;
  public get likes() {
    return this._likes;
  }
  public set likes(likes: number) {
    this._likes = likes;
  }

  constructor() {
    // fromEvent(HTMLElement, 'click').pipe().subscribe;
    // from(new Promise())
    // const likedObs = this._liked$.pipe(
    //   takeUntil(this._destroy$),
    //   map(likes => `Likes: ${likes}`),
    //   debounce(() => timer(100))
    // );
    // likedObs.subscribe({
    //   next: likes => console.log(likes),
    //   complete: () => console.log('complete'),
    //   error: () => console.error('error'),
    // });
    // likedObs.subscribe({
    //   next: likes => console.log(likes),
    //   complete: () => console.log('complete'),
    //   error: () => console.error('error'),
    // });
  }

  public like() {
    this._likes++;
    this._liked$.next(this._likes);
  }

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
