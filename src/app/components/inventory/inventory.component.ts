import { Component, OnInit, Inject } from '@angular/core';
import {CharactersService} from '../../app-services/characters.service';
import {Observable} from 'rxjs';
import {Character} from '../../character';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  characters: Character[];
  activeCharacter: Character;
  inventory: Array<string>;

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: Character

) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.inventory = this.data.inventory;
  }

}
