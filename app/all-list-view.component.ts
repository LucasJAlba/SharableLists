import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subject }           from 'rxjs/Subject';

import { List } from './lists/list';
import { ListService } from './lists/list.service';

@Component({
  //moduleId : module.id // webpack and angular have issues here: https://github.com/angular/angular/issues/10626
  templateUrl : './app/all-list-view.component.html',
  providers: [ListService]
})
export class AllListViewComponent implements OnInit {
  lists: List[];
  searchLists: Observable<List[]>;
  selectedList : List;
  private searchTerms = new Subject<string>();
 
  constructor(
    private listService: ListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listService.getLists()
      .then(lists => this.lists = lists);
    
    this.searchLists = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
          ? this.listService.search(term)
          : Observable.of<List[]>([]))
        .catch(error => {
          console.log(error); // TODO
          return Observable.of<List[]>([]);
        });
        
  }

  onSelect(list: List) {
    this.selectedList = list;
    this.router.navigate(['/list',list.id]);
  }

  trackByLists(index: number, list: List) { return list.id; }

  // TODO: remove? (here for development of list service)
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.listService.createList(name)
      .then( list => {
        this.listService.getLists()
          .then(lists => this.lists = lists);
        this.selectedList = null;
      });
  }

  // TODO: remove? (here for development of list service)
  delete(id: number | string): void {
    this.listService.deleteList(id)
      .then(() => {
        this.lists = this.lists.filter(l => l.id != id);
        if (this.selectedList && this.selectedList.id === id) {
          this.selectedList = null;
        }
      });
  }

  // TODO: remove? (here for development of list service)
  search(term: string): void {
    this.searchTerms.next(term);
  }
}