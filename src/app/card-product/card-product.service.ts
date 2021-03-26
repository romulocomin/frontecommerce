import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map, } from "rxjs/operators";
//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Product } from './card-product.model'
//import { error } from '@angular/compiler/src/util';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {

  }

  products(): Observable<Product[]> {

    const ret = this.http.get('http://localhost:3000/items')
    console.log("ret", ret)
    return this.http.get('http://localhost:3000/items')
      .pipe(
        map((response: any) => {
          console.log("aa", response)
          return response;
        }),
        catchError(this.handleError<Product[]>("erro request")))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
