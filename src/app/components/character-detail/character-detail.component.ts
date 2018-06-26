import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor(
    private CharactersService,
  ) { }

  ngOnInit() {
  }

}
