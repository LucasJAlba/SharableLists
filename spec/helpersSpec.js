import {test} from '../app/scripts/helpers';
describe("Testing That Helper's test function returns a value", function() {
  it("should return works!", function() {
    expect(test()).toEqual('works!');
  });
});