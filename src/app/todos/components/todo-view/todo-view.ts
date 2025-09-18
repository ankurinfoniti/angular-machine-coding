import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoModel } from '../../model/todo-model';

@Component({
  selector: 'app-todo-view',
  imports: [FormsModule],
  templateUrl: './todo-view.html',
  styleUrl: './todo-view.css',
})
export class TodoView {
  todo = input.required<TodoModel>();
  deleteTodo = output<number>();

  onDeleteTodo(id: number) {
    this.deleteTodo.emit(id);
  }
}
