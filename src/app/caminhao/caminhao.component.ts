import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CaminhaoService } from '../services/caminhao.service';
import { Caminhao } from '../model/cominhao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caminhao',
  templateUrl: './caminhao.component.html',
  styleUrls: ['./caminhao.component.css'],
  providers: [CaminhaoService]
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

  constructor(private caminhaoService: CaminhaoService, private router : Router) { }

  ngOnInit() {

  }


  public salvarCaminhao() : void {

    if(this.formulario.valid){

      var obj = new Caminhao(
        this.formulario.value.marca,
        this.formulario.value.modelo,
        this.formulario.value.placa,
        this.formulario.value.ano,
        this.formulario.value.apelido
      )

      this.caminhaoService.Incluir(obj)
      .then((x : boolean)=> {
        if(x){
          //$("#exampleModal").modal("hide");
        }
      });
    }
  }
  public limparFormulario(): void{
    this.formulario.reset();
  }
}
