import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { List, ListService } from './lists/list.service';

@Component({
  template: `<div>All Lists view page</div>
    <ul class="listItems">
      <li *ngFor="let list of lists | async">
        <span class="listName">{{ list.name }}</span>
      </li>
    </ul>`,
  providers: [ListService]
})
export class AllListViewComponent implements OnInit {
  lists: Observable<List[]>;
  selectedId: number;

  constructor(
    private service: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.lists = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getLists();
      });
  }
}