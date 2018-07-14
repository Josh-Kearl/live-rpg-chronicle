import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';
import { Observable } from 'rxjs';
import { Character } from '../../character';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  characters$: Observable<Character[]>;
  charName: string = '';
  charGender: string = '';
  charAppearance: string = '';
  charBio: string = '';
  charFirstItem: string = '';

  constructor(
    private charactersService: CharactersService,
    private dialogRef: MatDialogRef<CreateCharacterComponent>
  ) {
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characters$ = this.charactersService.getCharactersFB();

  }

  makeCharacter() {
    if ((this.charName === '') || (this.charAppearance === '') ||
      (this.charGender === '') || (this.charBio === '')) {
      alert("Please fill out the required fields.");
    } else {
      this.charactersService.addCharacter(this.charName, this.charGender, this.charAppearance, this.charBio, this.charFirstItem.toLowerCase());
      this.dialogRef.close();
    }
  }

}
