import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmitterService } from '../EmitterService';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalId: any;
  @Output() start: EventEmitter<number> = new EventEmitter();
  constructor(private emitter: EmitterService) {}

  ngOnInit() {}

  onStart(){
    let count: number = 0;
    this.intervalId = setInterval( () => {
      ++count;
      this.emitter.emit(count);
    }, 1000);

  }
  onStop(){
    clearInterval(this.intervalId);
  }

}
