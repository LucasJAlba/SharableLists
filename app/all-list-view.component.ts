import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { List } from './lists/list';
import { ListService } from './lists/list.service';

@Component({
  //moduleId : module.id // webpack and angular have issues here: https://github.com/angular/angular/issues/10626
  templateUrl : './app/all-list-view.component.html',
  providers: [ListService]
})
export class AllListViewComponent implements OnInit {
  lists: Observable<List[]>;
  selectedList : List;
 
  constructor(
    private listService: ListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lists = Observable.fromPromise(this.listService.getLists());
  }

  onSelect(list: List) {
    this.selectedList = list;
    this.router.navigate(['/list',list.id]);
  }

  trackByLists(index: number, list: List) { 
    return list.id; 
  }

  // TODO: remove (here for development of list service)
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.listService.createList(name)
      .then( list => {
        this.lists = Observable.fromPromise(this.listService.getLists());
        this.selectedList = null;
      });
  }
}