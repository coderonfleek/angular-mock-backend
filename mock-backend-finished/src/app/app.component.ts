import { AppService } from "./app.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tasks: any[] = [];
  myTask: string;
  taskEdit: string;
  editMode: boolean = false;
  loading: boolean = false;
  constructor(private appservice: AppService) {}

  ngOnInit() {
    this.getAllTasks();
  } //ngOnInit

  getAllTasks() {
    this.appservice.getTasks().subscribe(data => {
      this.tasks = data;
    });
  } //getAllTasks

  create() {
    this.loading = true;
    const postData = {
      description: this.myTask
    };

    this.appservice.createTask(postData).subscribe(data => {
      this.loading = false;
      this.getAllTasks();
      this.myTask = "";
    });
  } //create

  edit(task) {
    this.taskEdit = Object.assign({}, task);
    task.editing = true;
    this.editMode = true;
  } //edit

  saveEdit(task) {
    this.appservice.updateTask(this.taskEdit).subscribe(data => {
      //task = data;
      this.getAllTasks();
      task.editing = false;
      this.editMode = false;
    });
  } //saveEdit

  delete(task) {
    console.log("Delete");
    this.appservice.deleteTask(task.id).subscribe(data => {
      this.getAllTasks();
    });
  } //delete
}
