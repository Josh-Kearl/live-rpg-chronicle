import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';


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
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { SideNavComponent } from './components/story/side-nav/side-nav.component';


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
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'rpg-chronicle'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
