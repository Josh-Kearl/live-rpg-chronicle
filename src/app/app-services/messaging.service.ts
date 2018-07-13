import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../core/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CharactersService } from './characters.service'; 
import { map } from 'rxjs/operators';

interface Post{
  title: string;
  message: string;
}

interface PostCol extends Post {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessagingService {


    postDoc: AngularFirestoreDocument<Post>;
    post: Observable<Post>;  
    postsCol: AngularFirestoreCollection<Post>
    posts: any;
    title: string;
    message: string;
    name: any;
    msgVal: string;
    


  constructor(public afs: AngularFirestore, public auth: AuthService, public charactersService: CharactersService) {
    this.postsCol = this.afs.collection('posts', ref => ref.where('title', '==', 'coursetro'));
    this.posts = this.postsCol.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    }));

    this.auth.setName(this.name);

  }



  addPost(title, message){
    let customId = this.charactersService.makeId();
    this.afs.collection('messages').doc(customId).set({'title': title, 'message': message})
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('messages/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('messages/'+postId).delete();
  }

  // chatSend(theirMessage: string){
  //   this.items.push({message: theirMessage, name: this.name.facebook.displayName});
  //   this.msgVal = '';
  // }


}
