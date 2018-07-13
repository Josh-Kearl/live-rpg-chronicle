import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';
import { Observable } from 'rxjs';
import { Character } from '../../character';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  characters$: Observable<Character[]>;
  formsAreFilled: boolean = false; //Change this

  constructor(private charactersService: CharactersService) {
  }

  ngOnInit() {
    this.getCharacters();
    this.formsAreFilled = false;
  }

  getCharacters() {
    this.characters$ = this.charactersService.getCharactersFB();

  }

  makeCharacter(name, gender, appearance, bio, item) {
    if(this.formsAreFilled){
      this.charactersService.addCharacter(name, gender, appearance, bio, item.toLowerCase());
    } else {
      alert("Please fill out all form fields.");
    }
  }

  checkForm() {
    if ((document.getElementById('characterName').value !== '') ||
    (document.getElementById('gender').value !== '') ||
    (document.getElementById('bio').value !== '') ||
    (document.getElementById('item').value !== '') ||
      document.getElementById('appearance').value !== '') {
      this.formsAreFilled = true;
    }
  }

}
