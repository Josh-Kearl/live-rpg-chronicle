import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''},

})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
