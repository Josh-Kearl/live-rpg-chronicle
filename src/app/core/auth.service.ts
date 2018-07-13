import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NotifyService } from './notify.service';
import { User } from 'src/app/core/user';






@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    // private notify: NotifyService, 
  ){
    this.user = afAuth.authState;
    this.user.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }))
  }
  
  //sign in methods

  facebookLogin(){
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  googleLogin(){
    const gProvider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(gProvider);
  }

  // emailSignUp(email: string, password: string){
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //   .then(user => {
  //   })
  //   .catch(error => this.handleError(error))
  // }

  // private handleError(error){
  //   console.log(error)
  //   this.notify.update(error.message, 'error');
  // }

  private oAuthLogin(provider){
    return this.afAuth.auth.signInWithPopup(provider)
    .then((credential) => {
      this.updateUserData(credential.user)
    })
  }

  private updateUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      // roles: {
      //   narrator: false
      // }
    }

    return userRef.set(data, {merge: true});
  }

  public setName(name){
    this.afAuth.authState.subscribe(auth =>{
      if(auth) {
        name = auth;
      }
    });
  }

  signOut(){
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }



  //Abilities and Role Authorization
// canRead(user: User): boolean {
//   const allowed = ['admin', 'narrator', 'player']
//   return this.checkAuthorization(user, allowed)
// }

// canModifyInventory(user: User): boolean{
//   const allowed = ['admin', 'narrator']
//   return this.checkAuthorization(user, allowed)
// }

// canDeleteStory(user: User): boolean{
//   const allowed = ['admin']
//   return this.checkAuthorization(user, allowed)
// }
  

// private checkAuthorization(user: User, allowedRoles: string[]): boolean{
//   if (!user) return false
//   for (const role of allowedRoles){
//     if ( user.roles[role]){
//       return true;
//     }
//   }
// return false;
// }






}






