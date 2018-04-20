import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viajem',
  templateUrl: './viajem.component.html',
  styleUrls: ['./viajem.component.css']
})
export class ViajemComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'key': new FormControl(null),
    'marca': new FormControl("", [Validators.required]),
    'modelo': new FormControl(null, [Validators.required]),
    'placa': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    'ano': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    'apelido': new FormControl(null, [Validators.required]),
  })
  
  constructor() { }

  ngOnInit() {
  }

  public salvarViajem(): void {

  }

}
