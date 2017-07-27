import {Component, OnInit, ElementRef, Renderer2, Input, OnDestroy } from '@angular/core';
import { EmitterService } from '../EmitterService';

@Component({
  selector: 'odd',
  templateUrl: './odd.component.html',
  styles: [`
      p, div {
        font-size: 16px;
        font-weight: bold;
      }

   `]
})
export class OddComponent implements OnInit, OnDestroy {
  oddNumbers: number[];
  private subscription: any;
  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private emitter: EmitterService){}

  @Input() value: number;
  ngOnInit(){
    this.oddNumbers = [];
    this.subscription = this.emitter.subscribe( (event) => {
      if(event % 2 !== 0)
        this.oddNumbers.push(event);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
