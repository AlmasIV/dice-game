import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { DicePair } from '../dice-pair.type';

@Component({
  selector: 'app-interaction',
  imports: [],
  templateUrl: './interaction.html',
  styleUrl: './interaction.css'
})
export class Interaction {
  public stateOfGame: InputSignal<string> = input<string>("Roll the dice!");
  public onRollOut: OutputEmitterRef<DicePair> = output<DicePair>();
  public rollTheDice(): void {
    this.onRollOut.emit([this._getRandomDiceRoll(), this._getRandomDiceRoll()]);
  }
  private _getRandomDiceRoll(): number {
    /*
      Math.floor(Math.random() * (max - min + 1)) + min;
      In my case max is 6 and min is 1.
    */
    return Math.floor(Math.random() * 6) + 1;
  }
}
