import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]=[
    {
        name: "Krillin",
        power:1000
    },
    {
        name: "Goku",
        power:9500
    },
    {
        name: "Vegeta",
        power:7500
    }
];

onNewCharacter(character:Character):void{
    console.log('Main page');
    
    console.log(character);
    
    this.characters.push(character)
}

onDeleteCharacter(id:number):void{
    console.log({id});
    
    this.characters.splice(id,1);
}
}
