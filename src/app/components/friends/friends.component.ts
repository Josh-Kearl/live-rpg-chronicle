import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {


  constructor(private router: Router,) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/dashboard']);
  }
}
