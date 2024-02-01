import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
  standalone: true
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, execute: boolean = false): string {
    if(!execute)
        return value;

    let password: string = '';

    for (let letter of value) {
      password = password + '*';
    }

    return password;
  }

}
