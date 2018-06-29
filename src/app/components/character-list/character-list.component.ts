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

  constructor(db: AngularFirestore) {
    this.characters = db.collection('/characters').valueChanges();
  }

}
