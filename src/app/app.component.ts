import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, "Passear com o cachorro", false))
    this.todos.push(new Todo(2, "mercado", false))
    this.todos.push(new Todo(3, "cabelo", true))
  }
}
