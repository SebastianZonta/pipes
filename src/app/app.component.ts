import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(localEs);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CapitalizedPipe, DomSecurePipe, PasswordPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = "Donald Trump";

  activate: boolean = true;
  
  myName: string = "SeBaStIaN zOnTa";

  array: number[] = [1, 2, 3, 4, 5, 6, 7];

  PI: number = Math.PI;

  percentage: number = 0.24673;

  salary: number = 1234.5;

  hero: Hero = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    adress:{
      street: 'first',
      house: 20
    }
  };

  valuePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('the data was delivered');
    }, 4500);
  });

  date:Date = new Date();

  languaje: string = "en";

  changeLanguaje(languaje: string){
    this.languaje = languaje;
  }

  videoUrl: string = 'https://www.youtube.com/embed/ZHhqwBwmRkI?si=ivCRz6CQI60ZxkKx';
}

export class Hero{
  constructor(name: string, key: string, age: number, adress: Adress){
  }
}

export class Adress{
  constructor(street: string, house: number){

  }
}
