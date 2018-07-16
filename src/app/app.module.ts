import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryComponent } from './components/story/story.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { CreateStoryComponent } from './components/create-story/create-story.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { FriendsComponent } from './components/friends/friends.component';
import { MessengerComponent } from './components/story/messenger/messenger.component';
import { SideNavComponent } from './components/story/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';


import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { Story } from './story';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StoryListComponent,
    StoryComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    CreateCharacterComponent,
    CreateStoryComponent,
    InventoryComponent,
    FriendsComponent,
    LoginComponent,
    SideNavComponent,
    MessengerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'rpg-chronicle'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    StoryComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
