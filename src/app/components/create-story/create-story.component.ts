import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/app-services/characters.service';
import { Observable } from "rxjs/index";
import { Character} from '../../character';
import { randomPrompts} from "./randomPrompts";
import { CreateCharacterComponent } from '../create-character/create-character.component';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  // isPlayer: boolean = false;
  // characters$: Observable<Character[]>;
  // hideCreate = true;
  firstMessage: string = '';
  storyTitle: string = '';


  constructor(
    private characterService: CharactersService,
    private dialogRef: MatDialogRef<CreateStoryComponent>
  ) {
  }

  ngOnInit() {
    // this.getCharacters();
  }

  // getCharacters(): void {
  //   this.characters$ = this.characterService.getCharactersFB();
  //   //this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  // }

  // togglePlayerStatus() {
  //   this.isPlayer = !this.isPlayer;
  //   console.log("toggled isPlayer variable " + this.isPlayer);
  // }

  randomPrompt(){
    let number = Math.floor(Math.random() * 10);
    this.firstMessage = randomPrompts[number];
  }

  makeStory() {
    if ((this.storyTitle === '') || (this.firstMessage === '')) {
      alert("Please fill out the required fields.");
    } else {
      this.characterService.addStory(this.storyTitle, this.firstMessage);
      this.dialogRef.close();
    }
  }

}
