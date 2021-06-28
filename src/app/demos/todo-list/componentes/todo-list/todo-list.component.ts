import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../task.model';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
})
export class TodoListComponent {
  
  @Input()
  list: Task[];

  @Output()
  toggle = new EventEmitter<any>();

  constructor(private tasksService: TasksService) { }

  toggleItem(index: number, acao: string) {
    const task = this.list[index];

    switch (acao) {
      case 'iniciar':
        task.finalizada = false;
        task.iniciada = true;
        break;
      case 'finalizar':
        task.finalizada = true;
        task.iniciada = false;
        break;
      case 'retomar':
        task.finalizada = false;
        task.iniciada = true;
        break;
      case 'cancelar':
        task.finalizada = false;
        task.iniciada = false;
        break;
    }

    this.toggle.emit({
      task: { ...task }
    });
  }

  excluir(id: number) {
    this.tasksService.remover(id);
  }
}
