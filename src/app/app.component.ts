import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import {Component, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { SideNavComponent } from "./components/story/side-nav/side-nav.component";
import { OuterSubscriber } from "rxjs/internal/OuterSubscriber";
import { AngularFireDatabase, AngularFireList,  } from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from "./core/auth.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  items: AngularFirestoreCollection<any>;
  name: any;
  msgVal: string = '';


  // @Output() snavToggle = new EventEmitter<boolean>();
  
  
  title = 'RPG Chronicle';
  character: Observable<any[]>;
  constructor(
    private db: AngularFirestore, 
    public auth: AuthService,
    private router: Router,
    private _location: Location,
  ) {

    this.character = db.collection('characters').valueChanges();
    console.log(this.character);
  }

  ngAfterViewInit(){
    
  }

  // navOpen(){
  //   this.snavToggle.emit(true);
  // }
  
  back() {
    this._location.back();
  }

}
