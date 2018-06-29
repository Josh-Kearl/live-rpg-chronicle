import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  character: Observable<any[]>;
  constructor(db: AngularFirestore){
    this.character = db.collection('characters').valueChanges();
    console.log(this.character);
  }
  title = 'RPG Chronicle';
}
