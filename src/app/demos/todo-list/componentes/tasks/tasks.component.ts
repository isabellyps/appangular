import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private taskService: TasksService,
    private store: Store  
  ) { }

  ngOnInit(): void {
    this.todolist$ = this.store.getTodoList()
      .pipe(map(todolist => todolist.filter(task => !task.iniciada && !task.finalizada)));
  
    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  onToggle(event: any) {
    this.taskService.toggle(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
