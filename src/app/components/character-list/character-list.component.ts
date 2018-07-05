import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from "rxjs/index";
import { CharactersService } from "../../app-services/characters.service"
import { Character } from '../../character';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateCharacterComponent } from "../create-character/create-character.component";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(
    private characterService: CharactersService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getCharacters();

  }

  displayCharacterName(character){
    console.log(character.name);
  }

  getCharacters(): void {
      this.characters$ = this.characterService.getCharacters();
      //this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(CreateCharacterComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  }
