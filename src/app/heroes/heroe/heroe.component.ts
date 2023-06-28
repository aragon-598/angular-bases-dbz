import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {


  public name:string = 'ironman';
  public age: number= 49

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName():void{
    this.name = 'Spiderman'//this.name=='Spiderman'? this.name='Ironman':this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25//this.age==49? this.age=22:this.age = 49;
  }

}
