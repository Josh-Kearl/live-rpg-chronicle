import { Component, OnInit } from '@angular/core';
import { CharactersService } from "../../app-services/characters.service";
import { Observable } from "rxjs/index";
import { Character } from "../../character";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.characters$ = this.charactersService.getCharacters();

  }

  makeCharacter(name,gender,appearance,bio,item) {
    this.charactersService.addCharacter(name,gender,appearance,bio,item);
  }

}
