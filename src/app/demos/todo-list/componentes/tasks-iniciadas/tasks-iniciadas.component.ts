import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TasksService } from '../../todo.service';

@Component({
  selector: 'app-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styles: [
  ]
})
export class TasksIniciadasComponent implements OnInit {

  iniciadas$: Observable<any[]>;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.iniciadas$ = this.taskService.getTodoList$;
  }

}
