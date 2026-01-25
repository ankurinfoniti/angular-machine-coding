import { Component, signal } from '@angular/core';

import { TodoModel } from '../../model/todo-model';
import { AddTodo } from '../../components/add-todo/add-todo';
import { TodoView } from '../../components/todo-view/todo-view';

@Component({
  selector: 'app-todos',
  imports: [AddTodo, TodoView],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todos = signal<TodoModel[]>([]);

  onAddTodo(value: string) {
    this.todos.update((todos) => [
      ...todos,
      { id: todos.length + 1, text: value, completed: false },
    ]);
  }

  onDeleteTodo(id: number) {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }
}
