import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Character } from "../../../../Angular/c6-star-wars-app-animations-beginning/src/app/domains/character";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private HttpClient
  ) { }

  getCharacter(id: string): Observable<Character> {
    return this.getCharacter().pipe(map((characters: Character[]) => {
      return characters.find((character: Character) => character.id === id);
    }));
  }
}
