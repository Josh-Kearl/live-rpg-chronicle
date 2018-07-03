import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../../../../Angular/c6-star-wars-app-animations-beginning/src/app/services/character.service";

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  isPlayer: boolean;

  constructor(characterService: CharacterService) { }

  ngOnInit() {
  }

  togglePlayerStatus() {
    console.log("This should toggle between player and narrator boolean");
  }

}
