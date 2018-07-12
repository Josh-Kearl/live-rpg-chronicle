import { Injectable } from '@angular/core';
import {Character} from '../character';
import {AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventory: AngularFirestoreCollection<Character>;


  constructor() { }

  addItem(item){
  }

  deleteItem(item){

  }
}
