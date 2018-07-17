import { Component, Inject, OnInit } from '@angular/core';
import { MessagingService } from '../../app-services/messaging.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Story } from '../../story';
import { CharactersService } from '../../app-services/characters.service';

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  private stories: AngularFirestoreCollection<Story>;
  activeStory: Story
  plot: string[] = [];
  storyRef: any;
  newMessage: string;
  messageRef: any;
  messages: string[] = [];

  constructor(
    private messagingService: MessagingService,
    private characterService: CharactersService,
    db: AngularFirestore,
  )
  {
    this.characterService.activeStory.subscribe(activeStory => {
      this.activeStory =  activeStory;
    })
    this.storyRef = db.collection('stories').doc(this.activeStory.id);
    this.messageRef = db.collection('messages').doc(this.activeStory.id);
    db.collection('stories').doc(this.activeStory.id).valueChanges().subscribe((story: Story) => {
       this.plot = story.plot;
     });
  }

  ngOnInit() {

  }

  writeStory(role) {
    if(this.newMessage !== ''){
      let tempArray = [];
      for (let i = 0; i < this.plot.length; i++) {
        tempArray.push(this.plot[i]);
      }
      tempArray.push(this.newMessage);
      console.log(this.newMessage + ' added to ' + this.activeStory.title);
      this.storyRef.update({
        plot: tempArray
      });
      this.newMessage = '';
    }
  }

  
  writeMessage(role) {
    if(this.newMessage !== ''){
      let tempArray = [];
      for (let i = 0; i < this.plot.length; i++) {
        tempArray.push(this.messages[i]);
      }
      tempArray.push(this.newMessage);
      console.log(this.newMessage + ' added to ' + this.activeStory.title);
      this.messageRef.update({
        messages: tempArray
      });
      this.newMessage = '';
    }
  }



}

