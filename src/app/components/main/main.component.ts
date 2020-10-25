import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/firestore';
import "firebase/database";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  addtext = '';
  auth = firebase.auth()
  isLoged_in = false;
  text = [];
  notification = ''
  email = ''
  isnew = true;
selectedNote : any

  constructor() { }
  ngOnInit() {
   
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.email = firebaseUser.email
        this.isLoged_in = true;
        firebase.firestore().collection('firetest1').where('email','==',firebaseUser.email).onSnapshot(query => {
          if (query.empty) return;
          this.text = []
          query.forEach(doc => {
            const note = doc.data();
            this.text.push(note)
          });
        });
        console.log(firebaseUser.email)
        
      } else {
        location.href = '/login'
      }
      
    });
  
  }

  add() {
    if (this.addtext != '' && this.isnew) {
      const key = firebase.database().ref().push().key;
    firebase.firestore().collection('firetest1').doc(key).set({
      id: key,
      new: this.addtext,
      email: this.email

    }, { merge: true });

    this.addtext = ''
  }else {
    firebase.firestore().collection('firetest1').doc(this.selectedNote.id).update({
      new: this.addtext,
    }).then(d => {
      this.isnew = true,
      this.addtext = ''
    });
  }
}
    
  read(itm){
    console.log(itm)
  }
  logout(){
    this.notification = 'Youre signed out'
    firebase.auth().signOut();
    location.href = '/login'
  }
  del(id: string){
    console.log(id)
    firebase.firestore().collection('firetest1').doc(id).delete().then(d => {
      console.log('id')
    }).catch(err => {
      console.log(err)
    })

  }
  edit(itm){
    this.isnew = false,
    this.selectedNote = itm,
    this.addtext = itm.new
    
  }
}
