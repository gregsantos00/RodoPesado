import * as fb from 'firebase';
import { Caminhao } from '../model/cominhao.model';

export class CaminhaoService {

    public Incluir(model: Caminhao) : Promise<boolean>{
        return new Promise((resolve, reject)=>
         {
            fb.database().ref(`caminhoes/${btoa(model.placa)}`).push(model);
            resolve(true);
        })
    }
}