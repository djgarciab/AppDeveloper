import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Temperatura } from '../models/temperatura';
import { Global } from './global';


@Injectable()
export class TemperaturaService {
    public url: string;
     constructor( private http: HttpClient) {
         this.url = Global.url;
     }
     testService() {
        return 'Probando el servicio de temperatura';
    }

    getTemperaturas(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'temperaturas', {headers: headers});
     }


}