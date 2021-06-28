import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'app-tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html'
})
export class TasksFinalizadasComponent implements OnInit {

  finalizadas$: Observable<any[]>;

  constructor(private taskService: TasksService,
    private store: Store  
  ) { }

  ngOnInit(): void {
    this.finalizadas$ = this.store.getTodoList()
      .pipe(map(todolist => todolist.filter(task => task.finalizada)));
  }

  onToggle(event: any) {
    this.taskService.toggle(event);
  }
}
