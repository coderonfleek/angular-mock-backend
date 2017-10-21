import { InMemoryDbService } from "angular-in-memory-web-api";

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    let tasks = [
      {
        id: 1,
        description: "Buy Groceries"
      },
      {
        id: 2,
        description: "Paint the garage"
      }
    ];

    return {
      tasks: tasks
    };
  }
}
