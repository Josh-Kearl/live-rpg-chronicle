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
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SideNavComponent } from './components/story/side-nav/side-nav.component';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'character/:id', component: CharacterDetailComponent},
  {path: 'character-list', component: CharacterListComponent, data: {title: 'Characters'}},
  {path: 'create-character', component: CreateCharacterComponent},
  {path: 'inventory/:id', component: InventoryComponent, data: {title: 'Characters'}},
  {path: 'create-story', component: CreateStoryComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'story', component: StoryComponent},
  {path: 'story-list', component: StoryListComponent},
  {path: 'login', component: LoginComponent}
];

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
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CoreModule,

    HttpModule,
    HttpClientModule,
  ],
  providers: [

    // {provide: MAT_DIALOG_DATA, useValue: {}},
    // {provide: MatDialogRef, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
