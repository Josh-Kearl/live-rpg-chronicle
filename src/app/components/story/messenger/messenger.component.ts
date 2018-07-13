import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../../app-services/messaging.service';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

    title: string;
    message: string;



  constructor(public messenger: MessagingService, public auth: AuthService) { }

  ngOnInit() {
  }

  addPost(){
     this.messenger.addPost(this.title, this.message);
  }

  getPost(postId) {
   
  }

  deletePost(postId) {
    
  }

}
