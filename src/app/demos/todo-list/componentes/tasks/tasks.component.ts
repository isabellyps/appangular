import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TasksService } from '../../todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent implements OnInit {

  todolist$: Observable<any[]>;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.todolist$ = this.taskService.getTodoList$;
  }

}
