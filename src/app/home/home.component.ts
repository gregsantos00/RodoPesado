import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') public publicacoes: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public LogOut(): void {
    this.auth.logout();
  }
  public atualizaTimeLine(): void {
    //this.publicacoes.atualizaTimeLine();
    //    console.log('OK');
  }
}
