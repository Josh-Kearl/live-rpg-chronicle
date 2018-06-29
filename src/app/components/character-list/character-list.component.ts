import { Component } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs/index";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  public characters: Observable<any[]>;
  hideCreate = true;

  constructor(db: AngularFirestore) {
    this.characters = db.collection('/characters').valueChanges();
  }

  displayCharacterName(character){
    console.log(character.name);
  }

  openCreateMenu(){
    this.hideCreate = false;
    console.log("waa");
  }

}
