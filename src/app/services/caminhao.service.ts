import * as fb from 'firebase';
import { Caminhao } from '../model/cominhao.model';

export class CaminhaoService {

    public Incluir(model: Caminhao) : Promise<boolean>{
        return new Promise((resolve, reject)=>
         {
            fb.database().ref(`caminhoes`).push(model);
            resolve(true);
        })
    }
    public ListarCaminhao() : Promise<Caminhao[]>{

        return new Promise((resolve, reject)=>
         {
            let lista: Caminhao[] = []
            fb.database().ref(`caminhoes`)
            .once('value')
            .then((resposta : any)=>{

                resposta.forEach(element => {
                     lista.push(new Caminhao(
                         element.val().marca,
                         element.val().modelo,
                         element.val().placa,
                         element.val().ano,
                         element.val().apelido,
                     ))
                });
            })
            
            resolve(lista);
        })
    }
}