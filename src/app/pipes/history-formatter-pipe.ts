import { Pipe, PipeTransform } from '@angular/core';
import { DicePair } from '../dice-pair.type';

@Pipe({
  name: 'historyFormatter',
  standalone: true
})
export class HistoryFormatterPipe implements PipeTransform {
  transform(value: DicePair[]): string {
    if (!value || value.length === 0) {
      return "No rolls yet";
    }
    return value.map(pair => `(${pair[0]}, ${pair[1]})`).join(" | ");
  }
}
