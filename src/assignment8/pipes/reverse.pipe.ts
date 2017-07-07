import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform (val){
    return val.split('')
          .reverse()
          .join('');
  }
}
