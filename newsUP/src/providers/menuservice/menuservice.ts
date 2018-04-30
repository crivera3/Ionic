import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';

/*
  Generated class for the MenuserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  permitame, lo escucho pero vos no me escuchas..
  and Angular DI.
*/
// permitame reviso algo
const URL = 'http://localhost:8080/basic/web/index.php?r=prod-o-serv%2Findex';
// http://localhost:8080/basic/web/index.php?r=prod-o-serv%2Findex
// https://data-agenda.wedeploy.io/talks
@Injectable()
export class MenuserviceProvider {
  
  MenuArray: any;

  constructor( public http: HttpClient) {
  }

  NuevaClase(): Observable<Array<any>>{
    return this.http.get(URL)
    .flatMap((x: any) => Observable.from(x))
    .map(x => {
        return x;
    })
    .toArray();
  }
}


