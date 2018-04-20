import { Component, OnInit } from '@angular/core';
import * as fb from 'firebase';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public logado : boolean = false;

  constructor() { }

  ngOnInit() {
    fb.auth().onAuthStateChanged((user: any) => {
      console.log(user.email);
      this.logado =  user.email != undefined && user.email != ''
    })
  }

}
