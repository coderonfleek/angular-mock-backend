import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AppService {
  base_url: string = "http://mybackend.com/api/";
  tasks_endpoint = "tasks";
  constructor(private http: Http) {}

  //Gets all tasks
  getTasks() {
    return this.http
      .get(this.base_url + this.tasks_endpoint)
      .map(res => res.json());
  } //getTasks

  //Creates a task
  createTask(task) {
    return this.http
      .post(this.base_url + this.tasks_endpoint, task)
      .map(res => res.json());
  } //createTask

  //Updates a Task
  updateTask(update) {
    return this.http
      .put(this.base_url + this.tasks_endpoint, update)
      .map(res => res.json());
  } //updateTask

  //Deletes a Task
  deleteTask(taskId) {
    return this.http
      .delete(`${this.base_url + this.tasks_endpoint}/${taskId}`)
      .map(res => res.json());
  } //deleteTask
}
