import { Component, OnInit, ElementRef, Renderer2, Input, OnDestroy } from '@angular/core';
import { EmitterService } from '../EmitterService';

@Component({
  selector: 'even',
  templateUrl: './even.component.html',
  styles: [`
      p, div {
        font-size: 16px;
        font-weight: bold;
      }

   `]
})
export class EvenComponent implements OnInit, OnDestroy {
  evenNumbers: number[];
  private subscription: any;
  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private emitter: EmitterService){}

  @Input() value: number;
  ngOnInit(){
    this.evenNumbers = [];
    this.subscription = this.emitter.subscribe((event) => {
      if(event % 2 === 0)
        this.evenNumbers.push(event);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
