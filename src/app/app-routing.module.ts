import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AllPhotosComponent} from "./all-photos/all-photos.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {StreetPhotographyComponent} from "./street-photography/street-photography.component";
import {PeopleComponent} from "./people/people.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'all-photos', component: AllPhotosComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'street-photography', component: StreetPhotographyComponent},
  {path: 'people', component: PeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
