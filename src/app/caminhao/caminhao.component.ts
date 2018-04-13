import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-caminhao',
  templateUrl: './caminhao.component.html',
  styleUrls: ['./caminhao.component.css']
})
export class CaminhaoComponent implements OnInit {

  public maskPlaca = [/[A-z]/, /[A-z]/, /[A-z]/,'-', /\d/, /\d/, /\d/, /\d/];
  public maskAno = [/\d/, /\d/, /\d/, /\d/];

  public formulario: FormGroup = new FormGroup({
    'marca': new FormControl("", [Validators.required]),
    'modelo': new FormControl(null, [Validators.required]),
    'placa': new FormControl(null,[Validators.required, Validators.minLength(8)]),
    'ano': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    'apelido': new FormControl(null, [Validators.required]),
  })

  constructor() { }

  ngOnInit() {

  }


  public salvarCaminhao() : void {

    console.log(this.formulario.value);
  }
  public limparFormulario(): void{
    this.formulario.reset();
  }
}
