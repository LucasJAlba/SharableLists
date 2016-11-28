import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { List, ListService } from './lists/list.service';

@Component({
  template: `<div>All Lists view page</div>
    <ul class="listItems">
      <li *ngFor="let list of lists | async">
        <span class="listName"><a (click)="onSelect(list)">{{ list.name }}</a></span>
      </li>
    </ul>`,
  providers: [ListService]
})
export class AllListViewComponent implements OnInit {
  lists: Observable<List[]>;
  selectedId: number;
 
  constructor(
    private service: ListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lists = Observable.fromPromise(this.service.getLists());
  }

  onSelect(list: List) {
    this.selectedId = list.id;
    this.router.navigate(['/list',list.id]);
  }
}