import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { StoryListComponent } from './components/story-list/story-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FriendsComponent } from './components/friends/friends.component';
import { StoryComponent } from './components/story/story.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LoginComponent } from './components/login/login.component';
import { CreateStoryComponent } from './components/create-story/create-story.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'character/:id', component: CharacterDetailComponent},
  {path: 'character-list', component: CharacterListComponent, data: {title: 'Characters'}},
  {path: 'create-character', component: CreateCharacterComponent},
  {path: 'inventory/:id', component: InventoryComponent, data: {title: 'Characters'}},
  {path: 'create-story', component: CreateStoryComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'story/:id', component: StoryComponent},
  {path: 'story-list', component: StoryListComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
