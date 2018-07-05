import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';
import { Observable } from "rxjs/index";
import { Character } from "../../character";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.characters$ = this.charactersService.getCharacters();
  }

}
