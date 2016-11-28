import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let lists = [
			{id: 1, name: 'Shopping'},
		    {id: 2, name: 'Groceries'},
		    {id: 3, name: 'Other'}
		];
		return { lists };
	}
}