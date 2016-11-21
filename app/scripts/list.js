export class List {
	constructor() {
		this.items = [];
	}
	getList () {
		return this.items;
	}
	addItem (item) {
		this.items.push(item);
	}
}