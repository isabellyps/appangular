import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TasksService } from '../../todo.service';

@Component({
  selector: 'app-tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styles: [
  ]
})
export class TasksFinalizadasComponent implements OnInit {

  finalizadas$: Observable<any[]>;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.finalizadas$ = this.taskService.getTodoList$;
  }
}
