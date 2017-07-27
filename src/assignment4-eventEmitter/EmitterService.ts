import { EventEmitter } from '@angular/core';

export class EmitterService {
  private emitter: EventEmitter<any> = new EventEmitter();

  emit(value: any){
    this.emitter.emit(value);
  }
  subscribe(callback){
    this.emitter.subscribe(callback);
  }
}
