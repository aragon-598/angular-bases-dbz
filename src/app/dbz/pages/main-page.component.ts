import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    public title:string = 'DBZ Personajes';

    /**
     *
     */
    constructor(private dbzService:DbzService) {}

    get getCharacter():Character[]{
        return [...this.dbzService.characters]
    }

    deleteById(id:string):void{
        this.dbzService.deleteCharacterById(id);
    }

    addNewCharacter(character:Character):void{
        this.dbzService.onNewCharacter(character);
    }
}