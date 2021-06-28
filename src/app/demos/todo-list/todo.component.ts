import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Task } from './task.model';
import { TasksService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent implements OnInit {
  tarefaForm: FormGroup;
  tarefa: Task;

  constructor(private tasksService: TasksService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tarefaForm = this.fb.group({
      nome: [''],
    });
  }

  adicionarTarefas() {
    if (this.tarefaForm.dirty && this.tarefaForm.valid) {
      this.tarefa = Object.assign({}, this.tarefa, this.tarefaForm.value);
      this.tasksService.adicionar(this.tarefa);
      this.tarefaForm.reset();
    }
  }
}
