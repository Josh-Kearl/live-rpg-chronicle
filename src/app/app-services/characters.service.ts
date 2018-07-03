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

  getCharacters(): Observable<Character[]> {
    return this.characters.valueChanges();
  }

  addCharacter(name, gender, appearance, bio, item) {
    let character = {
      id: this.makeId(),
      name: name,
      gold: 0,
      gender: gender,
      appearance: appearance,
      bio: bio,
      inventory: [item]
    };
    this.characters.doc(character.id).set(character).then(function () {
      console.log('character created!')
    });
  }

  makeId() {
    let text = "";
    let possibleLetter = "abcdefghijklmnopqrstuvwxyz";
    let possibleNumber = "0123456789";

    for (let i = 0; i < 3; i++)
      text += possibleLetter.charAt(Math.floor(Math.random() * possibleLetter.length));
    for (let i = 0; i < 4; i++)
      text += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
    console.log(text);
    return text;
  }
}
