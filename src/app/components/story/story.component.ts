import { Component, OnInit } from '@angular/core';
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
  activeStory: Story;
  plot = [];
  storyRef: any;
  newMessage: string;

  constructor(
    private characterService: CharactersService,
    db: AngularFirestore,
  )
  {
    this.characterService.activeStory.subscribe(activeStory => {
      this.activeStory =  activeStory;
    });
    this.storyRef = db.collection('stories').doc(this.activeStory.id);
    db.collection('stories').doc(this.activeStory.id).valueChanges().subscribe((story: Story) => {
       this.plot = story.plot;
     });
  }

  ngOnInit() {

  }

  writeMessage(color) {
    let chatBite = {};
    if(this.newMessage !== ''){
      let tempArray = [];
      for (let i = 0; i < this.plot.length; i++) {
        chatBite = {message: this.plot[i].message, color: this.plot[i].color};
        tempArray.push(chatBite);
      }
      tempArray.push({message: this.newMessage, color: color});
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

