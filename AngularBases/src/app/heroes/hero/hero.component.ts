import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string ='iroman'
  public age: number = 45
  public originname: string = 'tony stark'


  get capitalizedName():string {
    return this.name.toLocaleUpperCase()
  }

  //metodo

  getHeroDescription():string {
    return `${ this.name} - ${this.age}`
  }

  changenHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 26
  }
  ResetForm(): void {
    this.name = 'iroman'
    this.age = 45
  }

}
