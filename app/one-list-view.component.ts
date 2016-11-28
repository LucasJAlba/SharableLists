import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { List } from './lists/list';
import { ListService } from './lists/list.service';

import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  template: `<div>Individual List View</div>
            {{(list|async)?.name}}`,
  providers: [ListService]
})
export class OneListViewComponent implements OnInit {
  list :Observable<List>;
  selectedId: number;

  constructor(
    private service : ListService,
    private router : Router,
    private route : ActivatedRoute
  ){};

  ngOnInit() {
  
     this.route.params.subscribe((param:Params) =>{
        this.list = Observable.fromPromise(this.service.getList(param["id"]));
     });
  }
}