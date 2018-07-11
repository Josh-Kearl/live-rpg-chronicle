import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/app-services/characters.service';
import { Observable } from "rxjs/index";
import { Character} from '../../character';
import { randomPrompts} from "./randomPrompts";


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
    this.characters$ = this.characterService.getCharactersFB();
    //this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }

  togglePlayerStatus() {
    this.isPlayer = !this.isPlayer;
    console.log("toggled isPlayer variable " + this.isPlayer);
  }

  randomPrompt(){
    let number = Math.floor(Math.random() * 10 + 1);
    document.getElementById('prompt').innerText = randomPrompts[number];
  }

  makeStory(title,player,prompt) {
    this.characterService.addStory(name, player, prompt);
  }

}
