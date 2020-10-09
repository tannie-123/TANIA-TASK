import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import{FormsModule}from '@angular/forms';
import{AngularFireModule}from '@angular/fire';
import{AngularFirestoreModule}from'@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import{DatabaseService}from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    DatabaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
