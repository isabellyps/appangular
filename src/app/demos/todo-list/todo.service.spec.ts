import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, Observer } from 'rxjs';

import { Task } from './task.model';
import { TasksService } from './todo.service';
import { Store } from './todo.store';

const todolist: Task[] = [
  {
    id: 1,
    nome: 'Responder e-mails',
    finalizada: true,
    iniciada: false,
  },
];

function createResponse(body) {
  return Observable.create((observer: Observer<any>) => {
    observer.next(body);
  });
}

class MockHttp {
  get() {
    return createResponse(todolist);
  }
}

describe('TasksService', () => {
  let service: TasksService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttp },
        TasksService,
        Store,
      ],
    });

    http = bed.get(HttpClient);
    service = bed.get(TasksService);
  });

  it('Deve retornar lista de tarefas', () => {
    service.getTodoList$.subscribe((result) => {
      expect(result.length).toBe(1);
      console.log(result);
      console.log(todolist);
      expect(result).toEqual(todolist);
    });
  });
});
