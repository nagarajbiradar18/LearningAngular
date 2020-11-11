import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe',
  pure: true
})
export class GenderPipePipe implements PipeTransform {

  transform(gender: any, ...args: any[]): any {
    
    if (gender == 0) {

      return 'Male';

    }

    return 'Female';
  }

}
