import {List} from '../app/scripts/list';
describe("List", function() {
  it("should return an empty array when `getList` is called without adding any items", function() {
  	let list = new List();
    expect(list.getList()).toEqual([]);
  });
});
