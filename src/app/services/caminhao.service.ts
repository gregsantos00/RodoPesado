import * as fb from 'firebase';
import { Caminhao } from '../model/cominhao.model';
import { Key } from 'protractor';

export class CaminhaoService {

    public Incluir(model: Caminhao) : Promise<boolean>{
        return new Promise((resolve, reject)=>
         {
            delete model.key;
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
                         element.key,
                         element.val().marca,
                         element.val().modelo,
                         element.val().placa,
                         element.val().ano,
                         element.val().apelido,
                     ))
                });
                resolve(lista);
            })
        })
    }
    public getByPLaca(placa : string) : Promise<Caminhao> {
        return new Promise((resolve, reject)=>
         {
            let obj: Caminhao
            fb.database().ref(`caminhoes`)
            .orderByChild('placa')
            .equalTo(placa)
            .once('value')
            .then((resposta : any)=>{
                
                resposta.forEach(element => {
                    obj = new Caminhao(
                        element.Key,
                        element.val().marca,
                        element.val().modelo,
                        element.val().placa,
                        element.val().ano,
                        element.val().apelido,
                    );
                });
                resolve(obj)
            })
        })
    }
    public Delete(caminhao : Caminhao) : Promise<void> {
        return new Promise((resolve, reject)=>
        {
            fb.database().ref(`caminhoes`).child(caminhao.key).remove();

            resolve();

        });

    }
}