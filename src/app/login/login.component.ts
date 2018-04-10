import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public eventEmitter: EventEmitter<string> = new EventEmitter()
  @Output() public eventEmitterLogin: EventEmitter<boolean> = new EventEmitter()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  })
  public mensagemErro: string = '';

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  public exibirPainel(): void {
    this.eventEmitter.emit('cadastro');
  }

  public confirmarLogin(): void {
    if (this.formulario.valid) {
      this.auth.logar(this.formulario.value.email, this.formulario.value.senha)
      .then((x: string)=> this.mensagemErro = x)
      .catch((x: string)=> this.mensagemErro = x)
    }

  }
}
