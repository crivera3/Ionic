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
  Generated class for the ParametrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const URL = 'http://localhost:8080/basic/web/index.php?r=parametros%2Findex';
@Injectable()
export class ParametrosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ParametrosProvider Provider');
  }
  NuevaClase(): Observable<Array<any>>{
    return this.http.get(URL)
    .flatMap((idparametro: any) => Observable.from(idparametro))
    .map(idparametro => {
        return idparametro;
    })
    .toArray();
  }
}
