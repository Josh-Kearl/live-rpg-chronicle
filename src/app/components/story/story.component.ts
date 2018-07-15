import { Component, Inject, OnInit } from '@angular/core';
import { MessagingService } from '../../app-services/messaging.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Story } from '../../story';

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  private stories: AngularFirestoreCollection<Story>;
  plot: string[] = [];
  storyRef: any;
  newMessage: string;

  constructor(
    @Inject public activeStory: Story,
    db: AngularFirestore,
  )
  {
    this.storyRef = db.collection('stories').doc(this.activeStory.id);
    db.collection('characters').doc(this.activeStory.id).valueChanges().subscribe((story: Story) => {
      this.plot = story.plot;
    });
  }

  ngOnInit() {

  }

  writeMessage(color) {
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
    else {

    }
  }
}

