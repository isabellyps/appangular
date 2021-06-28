import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';
import { TasksService } from './todo.service';
import { TodoListComponent } from './componentes/todo-list/todo-list.component';
import { TasksFinalizadasComponent } from './componentes/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './componentes/tasks-iniciadas/tasks-iniciadas.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { Store } from './todo.store';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        TasksService,
        Store
    ],
    declarations: [
        TodoComponent,
        TodoListComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        TasksComponent,
    ],
    exports: [
        TodoComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class TodoModule { }