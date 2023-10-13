import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tasks = [];

  addNewTask(task) {
    this.tasks.push(task);
  }

  constructor() {

  }
}
