import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';
import { AngularFirestoreCollection } from "angularfire2/firestore";

export interface Character {
  id: string;
  name: string;
  haircolor: string;
  age: number;
}

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  private characterList: AngularFirestoreCollection<Character>;

  constructor(
  ) { }

  ngOnInit() {
  }

}
