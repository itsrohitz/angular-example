import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalFirst'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if(!value){
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1)


    
  }

}
