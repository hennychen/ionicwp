import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry'; // don't forget the imports
/*
  Generated class for the WpBaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpBaseServiceProvider {
  baseUrl = 'http://vipho.cn';
  constructor(public httpClient: HttpClient) {
    console.log('Hello WpBaseServiceProvider Provider');
  }

  // notice the <T>, making the method generic
  get<T>(url, params): Observable<T> {
    return this.httpClient
        .get<T>(this.baseUrl + url, {params})
        .retry(3) // optionally add the retry
        .catch((err: HttpErrorResponse) => {

          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
          }

          // ...optionally return a default fallback value so app can continue (pick one)
          // which could be a default value
          // return Observable.of<any>({my: "default value..."});
          // or simply an empty observable
          return Observable.empty<T>();
        });
   }
   post<T>(url,params):Observable<T>{
    let bodyString = JSON.stringify(params); // Stringify payload
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = { headers: headers }; // Create a request option
    // headers.append('Authorization', auth);

     return this.httpClient.post<T>(this.baseUrl+url,params,options).catch((err: HttpErrorResponse) => {

      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
      }

      // ...optionally return a default fallback value so app can continue (pick one)
      // which could be a default value
      // return Observable.of<any>({my: "default value..."});
      // or simply an empty observable
      return Observable.empty<T>();
    });
   }
}
