import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import 'core-js/es7/reflect';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Character } from '../character';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private characters: AngularFirestoreCollection<Character>;

  constructor(db: AngularFirestore) {
    this.characters = db.collection<Character>('/characters');
  }

  getCharacters(): Observable<Character[]>{
    return this.characters.valueChanges();
  }
}
