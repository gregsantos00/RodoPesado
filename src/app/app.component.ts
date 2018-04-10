import { Component, OnInit } from '@angular/core';
import * as fb from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(): void {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCNQMCv8lAtgV056ZkQKRqxEW6-4AmZEgg",
      authDomain: "rodopesado-3f466.firebaseapp.com",
      databaseURL: "https://rodopesado-3f466.firebaseio.com",
      projectId: "rodopesado-3f466",
      storageBucket: "rodopesado-3f466.appspot.com",
      messagingSenderId: "630440489414"
    };
    fb.initializeApp(config);
  }
}
