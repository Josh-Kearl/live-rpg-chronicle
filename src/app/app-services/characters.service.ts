import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs/index";
import 'core-js/es7/reflect';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  characters: AngularFireList<any[]>;

  constructor(
    private HttpClient,
    private database: AngularFireDatabase
  ) {
    this.characters = database.list('characters');
    console.log(this.characters);
  }

  getCharacters(){
    return this.characters;
  }
}
