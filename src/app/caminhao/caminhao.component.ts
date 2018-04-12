import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caminhao',
  templateUrl: './caminhao.component.html',
  styleUrls: ['./caminhao.component.css']
})
export class CaminhaoComponent implements OnInit {

  public maskPlaca = [/[A-z]/, /[A-z]/, /[A-z]/,'-', /\d/, /\d/, /\d/, /\d/];
  public maskAno = [/\d/, /\d/, /\d/, /\d/];

  constructor() { }

  ngOnInit() {
  }

}
