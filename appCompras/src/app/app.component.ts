import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD3VDfBoSxaBCJDGbJLngV0BU0QEIQucsM",
      authDomain: "comprassapp-966c1.firebaseapp.com",
      databaseURL: "https://comprassapp-966c1.firebaseio.com",
      projectId: "comprassapp-966c1",
      storageBucket: "comprassapp-966c1.appspot.com",
      messagingSenderId: "858777604781"
    })
  }

}
