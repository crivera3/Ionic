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
  Generated class for the MusuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.  
  http://localhost:8080/basic/web/index.php?r=m-usuario%2FviewUserS2&c='4dm1n-NtrlC'
*/

@Injectable()
export class MusuarioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusuarioProvider Provider');
  }

  Login(user: any, pass:any): Observable<Array<any>>{
    return this.http.get("http://localhost:8080/basic/web/index.php?r=m-usuario%2FviewUser&user="+user+"&pass="+pass)
    .flatMap((user2: any) => Observable.from(user2))
    .map(user2 => {
        return user2;
    })
    .toArray();
  }
}
