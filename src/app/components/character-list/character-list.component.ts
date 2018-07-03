import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs/index";
import { CharactersService } from "../../app-services/characters.service"
import { Character } from '../../character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]>;
  hideCreate = true;

  constructor(private characterService: CharactersService) {
  }

  ngOnInit() {
    this.getCharacters();

  }

  openCharacterDetails(character){
    console.log(character.name);
  }

  openCreateMenu(){
    this.hideCreate = false;
  }

  getCharacters(): void {
      this.characters$ = this.characterService.getCharacters();
      //this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }

  makeCharacter(){

  }

}
