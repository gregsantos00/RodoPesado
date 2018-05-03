import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import '../shared/rxjs-extensions'
import { Caminhao } from '../model/cominhao.model';
import { CaminhaoService } from '../services/caminhao.service';

@Component({
  selector: 'app-viajem',
  templateUrl: './viajem.component.html',
  styleUrls: ['./viajem.component.css'],
  providers: [CaminhaoService]
})
export class ViajemComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'caminhao': new FormControl("", [Validators.required])
    // 'modelo': new FormControl(null, [Validators.required]),
    // 'placa': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    // 'ano': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    // 'apelido': new FormControl(null, [Validators.required]),
  })
  private subs: Subject<string> = new Subject<string>()
  public motoristas: Observable<string[]>
  public caminhoes: Caminhao[] = []

  constructor(private caminhaoService: CaminhaoService) { }

  ngOnInit() {

    this.caminhaoService.ListarCaminhao()
      .then((x: Caminhao[]) => {
        this.caminhoes = x;
      })
    // this.motoristas = this.subs
    //   .debounceTime(1000)
    //   .distinctUntilChanged()
    //   .switchMap((valor: string) => {
    //     if (valor.trim() === '') {
    //       return Observable.of<string[]>([]);
    //     }
    //     console.log('Requisição')
    //     return this.servico.pesquisarOferta(valor)
    //   })
    //   .catch((error: any) => {
    //     console.log(error)
    //     return Observable.of<string[]>([]);
    //   })
  }

  public salvarViajem(): void {

  }

}
