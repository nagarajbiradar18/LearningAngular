import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == 0){
      return "Female"
    }
    return 'Male';
  }

}
