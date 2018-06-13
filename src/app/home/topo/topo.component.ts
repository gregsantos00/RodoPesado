import { Component, OnInit } from '@angular/core';
import * as fb from 'firebase';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public logado : boolean = false;

  constructor(private auth : AuthService) { }

  ngOnInit() {
    fb.auth().onAuthStateChanged((user: any) => {
      console.log(user.email);
      this.logado =  user.email != undefined && user.email != ''
    })
  }

  public LogOut(): void {
    this.logado = false;
    this.auth.logout();
  }

}
