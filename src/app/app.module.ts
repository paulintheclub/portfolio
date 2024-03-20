import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AllPhotosComponent } from './all-photos/all-photos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './main/profile/profile.component';
import { PreviewComponent } from './main/preview/preview.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StreetPhotographyComponent } from './street-photography/street-photography.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllPhotosComponent,
    ContactsComponent,
    HeaderComponent,
    ProfileComponent,
    PreviewComponent,
    FooterComponent,
    AboutMeComponent,
    StreetPhotographyComponent,
    PeopleComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatDividerModule,
        HttpClientModule,
        DragDropModule
    ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
