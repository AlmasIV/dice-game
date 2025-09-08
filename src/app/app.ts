import { Component, signal, WritableSignal } from '@angular/core';
import { Interaction } from './interaction/interaction';
import { DicePair } from './DicePairType';
import { HistoryFormatterPipe } from './pipes/history-formatter-pipe';

@Component({
  selector: 'app-root',
  imports: [Interaction, HistoryFormatterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  public history: WritableSignal<DicePair[]> = signal<DicePair[]>([]);
  public resultText: string = "";
  public onRoll(dicePair: DicePair): void {
    this.history.update((prev) => [...prev, dicePair]);
    if(dicePair.reduce((prev, curr) => prev + curr) === 7) {
      this.resultText = "Win!";
    }
    else {
      this.resultText = "Sorry try next time";
    }
  }
}
