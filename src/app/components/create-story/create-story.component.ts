import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  isPlayer: boolean;

  constructor() { }

  ngOnInit() {
  }

  togglePlayerStatus() {
    console.log("This should toggle between player and narrator boolean");
  }

}
