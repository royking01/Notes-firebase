import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import 'firebase/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PagenotfoundComponent,
    LoginpageComponent,
    // FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
