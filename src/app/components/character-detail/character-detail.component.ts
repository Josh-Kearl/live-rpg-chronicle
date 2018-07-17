import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../app-services/characters.service';
import { Character } from '../../character';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InventoryComponent } from '../inventory/inventory.component';
import { AngularFirestore } from 'angularfire2/firestore';

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
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.charactersService
      .getDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe(character => {
        this.activeCharacter = character;
      });
  }

  back() {
    this.router.navigate(['../character-list']);
  }

  openInventory() {
    const dialogRef = this.dialog.open(InventoryComponent, {
      data: this.activeCharacter
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  killCharacter(characterId) {
    if (confirm('Are you sure you want to kill this character?')){
      this.back();
      this.charactersService.deleteCharacter(characterId);
    }
  }
}
