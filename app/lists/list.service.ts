export class List {
  constructor(public id: number, public name: string) { }
}

//replace this const with dynamic implementation (should be promise or observable)
const LISTS = [
  new List(1, 'Shopping'),
  new List(2, 'Groceries'),
  new List(3, 'Other')
];

let listPromise = Promise.resolve(LISTS);

import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  getLists() {
    return listPromise;
  }
  getList(id: number | string) {
    return listPromise
      .then(lists => lists.find(list => list.id === +id));
  }
}