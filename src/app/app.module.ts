import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryComponent } from './story/story.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FriendsComponent } from './friends/friends.component';

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
    FriendsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
