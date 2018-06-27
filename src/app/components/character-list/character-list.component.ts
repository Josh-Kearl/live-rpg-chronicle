import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';
import { AngularFirestoreCollection } from "angularfire2/firestore";

export interface Character {
  id: string;
  name: string;
  haircolor: string;
  age: number;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  character: any;

  constructor(
  ) { }

  ngOnInit() {
  }

  GetUserInfo(){
    // this.userService.getLoggedInUserInfo().subscribe( res => {
    //  this.user = res;
    return this.character = {
      name: 'Amberaldus',
      age: 31,
      haircolor: 'brown',
      inventory: ['dagger','rations','potion of brilliance']
}}}
