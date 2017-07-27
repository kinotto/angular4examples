import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  transform (val, par){
    return val.sort(function(a, b){
      if(a[par] < b[par])
        return -1;
      else
        return 1;
    })
  }
}
