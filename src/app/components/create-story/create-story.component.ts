import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/app-services/characters.service';
import { Character } from "../character-detail/character-detail.component";
import { Observable } from "rxjs/index";

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  isPlayer: boolean = false;
  characters$: Observable<Character[]>;
  hideCreate = true;

  constructor(private characterService: CharactersService) {
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characters$ = this.characterService.getCharacters();
    //this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }

  togglePlayerStatus() {
    this.isPlayer = !this.isPlayer;
    console.log("toggled isPlayer variable " + this.isPlayer);
  }

  openCreateMenu(){
    this.hideCreate = false;
  }

}
