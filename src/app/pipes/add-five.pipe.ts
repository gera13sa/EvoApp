import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add_five'
})
export class AddFivePipe implements PipeTransform {

  transform(value: number, args?: any): number {
    return value + 5;
  }

}
