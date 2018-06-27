import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';
import { AngularFirestoreCollection } from "angularfire2/firestore";
import { FirebaseListObservable } from "angularfire2/database-deprecated";

export interface Character {
  id: string;
  name: string;
  haircolor: string;
  age: number;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;

  constructor(
    // private CharactersService,
  ) { }

  ngOnInit() {
  }

  goToCharacterPage(character){
    console.log("Go.");
  }
}
