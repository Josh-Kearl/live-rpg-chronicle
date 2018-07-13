import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../character';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  private characters: AngularFirestoreCollection<Character>;
  inventory: string[] = [];
  inventoryRef: any;
  newItem: string;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Character,
    db: AngularFirestore,
  ) {
    this.inventoryRef = db.collection('characters').doc(this.data.id);
    db.collection('characters').doc(this.data.id).valueChanges().subscribe((char: Character) => {
      console.log(char);
      this.inventory = char.inventory;
    });
  }

  ngOnInit() {
    console.log("Here");
  }

  addItem() {
    if(this.newItem !== ''){
      this.newItem.toLowerCase();
      let tempArray = [];
      for (let i = 0; i < this.inventory.length; i++) {
        tempArray.push(this.inventory[i]);
      }
      tempArray.push(this.newItem);
      console.log(this.newItem + ' added to ' + this.data.name + '\'s inventory.');
      console.log(tempArray);
      this.inventoryRef.update({
        inventory: tempArray
      });
      this.newItem = '';
    }
    else {
      alert("Please enter an item name.");
    }
  }

  deleteItem(item) {
    console.log(item);
    let tempArray = [];
    for (let i = 0; i < this.inventory.length; i++) {
      tempArray.push(this.inventory[i]);
    }
    let deletedItem = tempArray.indexOf(item);
    tempArray.splice(deletedItem);
    console.log(item + ' removed from ' + this.data.name + '\'s inventory.');
    this.inventoryRef.update({
      inventory: tempArray
    });
    this.data.inventory = tempArray;
  }
}
