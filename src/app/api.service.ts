import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  private API: string = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';
  constructor(private http: Http){}

  getBeers(): Observable<any> {
    return this.http.get(this.API)
           .map(response => response.json());
  }
}
