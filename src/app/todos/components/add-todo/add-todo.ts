import { Component, output, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  imports: [],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  addTodo = output<string>();

  onAddTodo(value: string) {
    if (value.trim()) {
      this.addTodo.emit(value);
    }
  }
}
