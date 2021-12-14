import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: 'video[media], audio[media]',
})
export class MediaDirective {
  @Input()
  set currentTime(currentTime: number) {
    if (currentTime !== this.currentTime) {
      this.elementRef.nativeElement.currentTime = currentTime;
    }
  }

  @Input()
  set paused(paused: boolean) {
    if (paused) {
      this.elementRef.nativeElement.pause();
    } else {
      this.elementRef.nativeElement.play();
    }
  }

  @Input()
  @HostBinding('volume')
  volume = 1;

  @Output()
  readonly currentTimeChange = new EventEmitter<number>();

  @Output()
  readonly pausedChange = new EventEmitter<boolean>();

  @Output()
  readonly volumeChange = new EventEmitter<number>();

  constructor(private readonly elementRef: ElementRef<HTMLMediaElement>) {}

  get paused(): boolean {
    return this.elementRef.nativeElement.paused;
  }

  get currentTime(): number {
    return this.elementRef.nativeElement.currentTime;
  }

  @HostListener('ended', ['true'])
  @HostListener('pause', ['true'])
  @HostListener('play', ['false'])
  onPausedChange(paused: boolean) {
    this.pausedChange.emit(paused);
  }

  @HostListener('volumechange')
  onVolumeChange() {
    this.volume = this.elementRef.nativeElement.volume;
    this.volumeChange.emit(this.volume);
  }

  @HostListener('timeupdate')
  @HostListener('seeking')
  @HostListener('seeked')
  onCurrentTimeChange() {
    this.currentTimeChange.emit(this.currentTime);
  }

  @HostListener('durationchange')
  changeDetectionTrigger() {}
}
