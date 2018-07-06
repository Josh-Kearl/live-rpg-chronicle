import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';
import { Observable } from "rxjs/index";
import { Character } from "../../character";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  activeCharacter: Character;


  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.charactersService
      .getDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe(character => this.activeCharacter = character)
  }

  getCharacters() {
    this.characters$ = this.charactersService.getCharacters();
  }

}
