import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';

/*
  Generated class for the MvtoresumenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MvtoresumenProvider {

  constructor(public http: HttpClient) {
  }

  years(): Observable<Array<any>>{
    return this.http.get('http://localhost:8080/basic/web/index.php?r=mvto-resumen%2FviewYear')
    .flatMap((anios: any) => Observable.from(anios))
    .map(anios => {
        return anios;
    })
    .toArray();
  }

  NuevaClase(ano:any): Observable<Array<any>>{
    return this.http.get('http://localhost:8080/basic/web/index.php?r=mvto-resumen%2Fviewcondition&attribute=ano&id='+ano)
    .flatMap((x: any) => Observable.from(x))
    .map(x => {
        return x;
    })
    .toArray();
  }

  top5(mesano:any): Observable<Array<any>>{
    return this.http.get('http://localhost:8080/basic/web/index.php?r=mvto-resumen%2FviewTop5&mesano='+mesano)
    .flatMap((top: any) => Observable.from(top))
    .map(top => {
        return top;
    })
    .toArray();
  }
}


