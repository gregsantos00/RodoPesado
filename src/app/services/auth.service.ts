import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as fb from 'firebase';

@Injectable()
export class AuthService {

  public id_token: string = ''

    constructor(private router: Router) { }

    public logar(email: string, senha: string): Promise<string> {

      return fb.auth().signInWithEmailAndPassword(email, senha)
          .then((response: any) => {
              fb.auth().currentUser.getIdToken()
                  .then((token: string) => {
                      this.id_token = token
                      localStorage.setItem('idToken', this.id_token)
                      this.router.navigate(['/home'])

                  })
              return ''
          })
          .catch((erro: Error) => { return erro.message });

  }
  public autenticado(): boolean {

      if (this.id_token === '' && localStorage.getItem('idToken') !== null) {
          this.id_token = localStorage.getItem('idToken');
      }
      if (this.id_token === '') {
          this.router.navigate(['/']);
      }
      return this.id_token !== '';
  }
  public logout(): void {
      fb.auth().signOut()
          .then(() => {
              this.id_token = '';
              localStorage.removeItem('idToken');
              this.router.navigate(['/'])
          });
  }
}
