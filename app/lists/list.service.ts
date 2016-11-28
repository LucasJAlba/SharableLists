import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { List } from './list';

@Injectable()
export class ListService {
  private listUrl = "app/lists";
  private headers = new Headers({"Content-Type" : "application/json"});
  private searchTerms = new Subject<string>();

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // TODO: remove
    return Promise.reject(error.message || error);
  }
  
  getLists(): Promise<List[]> {
    return this.http.get(this.listUrl)
      .toPromise()
      .then(response => response.json().data as List[])
      .catch(this.handleError);
  }

  getList(id: number | string): Promise<List> {
    id = +id;
    return this.getLists()
      .then(lists => lists.find(list => list.id === id));
  }

  createList(name: string): Promise<List> {
    return this.http
      .post(this.listUrl, JSON.stringify({name : name}), {headers : this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  search(term: string): Observable<List[]> {
    return this.http
      .get(`${this.listUrl}/?name=${term}`)
      .map((r: Response) => r.json().data as List[]);
  }
}