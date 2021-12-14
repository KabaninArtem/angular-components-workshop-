import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(time: number): string {
    const integer = Math.round(time || 0);
    const seconds = integer % 60;
    const minutes = (integer - seconds) / 60;
    const secondsString = String(seconds);
    const minutesString = String(minutes);

    return `${minutesString.padStart(2, '0')}:${secondsString.padStart(
      2,
      '0'
    )}`;
  }
}
