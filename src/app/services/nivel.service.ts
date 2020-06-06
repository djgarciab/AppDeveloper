import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Global } from './global';


@Injectable()
export class NivelService {
    public url: string;
     constructor( private http: HttpClient) {
         this.url = Global.url;
     }
     testService() {
        return 'Probando el servicio de niveles';
    }

    getNiveles(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'niveles', {headers: headers});
     }


}