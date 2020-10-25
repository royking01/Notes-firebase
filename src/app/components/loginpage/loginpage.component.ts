import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  auth = firebase.auth();
  notification = '';
  password = '';
  email = '';
  signupp;
  page;
  isLoged_in = false;
  constructor() { }

  ngOnInit(): void {
    this.page = true;
    // location.href = '/home'

    
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {

        
        this.isLoged_in = true;
        console.log(firebaseUser);
        location.href = '/home'
        
      } else {
        console.log('not logged in');
      }
    })
  }

  enterr() {
    if (this.email != '' && this.password.length >= 5) {
      this.auth.signInWithEmailAndPassword(this.email,this.password).then(e => location.href=('home')).catch(e => this.notification == (e.message));
      
      console.log('hello')
    }else{
      console.log()
      this.notification = 'please make  sure you fill in your credentials with the appropriate information';
      // location.href='/home';/
    }

  }

  enter(){
    if (this.email != '' && this.password.length >= 5) {
    this.auth.signInWithEmailAndPassword(this.email,this.password).then(e => location.href=('home')).catch(e => this.notification == (e.message));
    }else{
      console.log( 'noting')
      this.notification = 'please make  sure you fill in your credentials with the appropriate information';
      // location.href='/home';/
    }
  }
  signup(){
     this.signupp = true;
     this.page = false;
    
  }


  signupno(){
    console.log('nott')
    this.auth.createUserWithEmailAndPassword(this.email, this.password).catch(e => this.notification == (e.message));

  }
  back(){
    location.href ='/login'

  }
  signupnow(){
    
    if ( this.password.length == 5) {
      this.auth.createUserWithEmailAndPassword(this.email, this.password).catch(e => this.notification == (e.message));
      location.href = 'home'
      console.log('hello')
    }else{
      console.log('null')
      this.notification = 'please make sure you register your credentials with the appropriate information'
    }
  }
  logout(){
    this.notification = 'Youre signed out'
    firebase.auth().signOut();
  }
}
