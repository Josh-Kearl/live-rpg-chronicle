import {Component, OnInit, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from '../../character';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  private characters: AngularFirestoreCollection<Character>;
  activeCharacter: Character;
  inventory$: Array<string>;
  inventoryRef: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Character,
    db: AngularFirestore,
  ) {
    this.inventoryRef = db.collection('characters').doc(this.data.id);
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.inventory$ = this.data.inventory;
  }

  // addItem(item) {
  //   document.getElementById('newItem').value = '';
  //   item = item.toLowerCase();
  //   let tempArray = [];
  //   for (let i = 0; i < this.data.inventory.length; i++) {
  //     tempArray.push(this.data.inventory[i]);
  //   }
  //   tempArray.push(item);
  //   console.log(item + ' added to ' + this.data.name + '\'s inventory.');
  //   console.log(tempArray);
  //   this.inventoryRef.update({
  //     inventory: tempArray
  //   });
  //   this.data.inventory = tempArray;
  // }
}
