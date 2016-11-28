import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { List } from './lists/list';
import { ListService } from './lists/list.service';

@Component({
  templateUrl : './app/one-list-view.component.html',
  providers: [ListService]
})
export class OneListViewComponent implements OnInit {
  list : List;

  constructor(
    private listService : ListService,
    private route : ActivatedRoute,
    private location : Location,
    private router : Router
  ){};

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.listService.getList(+params["id"]))
      .subscribe(list => this.list = list);
  }

  save(): void {
    this.listService.updateList(this.list)
      .then(() => {
        this.location.back();
      });
  }
}