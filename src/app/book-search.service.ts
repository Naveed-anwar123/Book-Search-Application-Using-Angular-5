import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers ,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {reject, resolve} from "q";

@Injectable()
export class BookSearchService {

  constructor(private http: Http) { }

  getBooks(term:string){

    let promise = new Promise((resolve, reject) => {
      this.url = `https://www.googleapis.com/books/v1/volumes?q=${term}`;
      console.log(this.url)
      this.http.get(this.url)
        .toPromise()
        .then(res=>{
            resolve(res)
          },
          msg=>{
            reject(msg)
          }
        )
    });
    return promise;
  }

}
