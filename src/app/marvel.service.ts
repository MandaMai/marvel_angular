import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {
  
  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8c341eb8a8058fa06e30e3cd5c608bc2&hash=ee5c3bb981328e44a00878da4bad4323&limit=100";
  
  constructor(private http: Http) { }
  
    getHeroInfo(searchItem: string): Observable<any> {
  
      return this.http.get(this.baseUrl+searchItem)
        .map(result => {
          return result.json()
        })
    }
}
