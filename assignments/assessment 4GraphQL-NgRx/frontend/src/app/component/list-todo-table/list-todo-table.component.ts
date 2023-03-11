import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/service/Todo';

@Component({
  selector: 'app-list-todo-table',
  templateUrl: './list-todo-table.component.html',
  styleUrls: ['./list-todo-table.component.scss'],
})
export class ListTodoTableComponent implements OnInit {
  @Input() todos!: Todo[];
  @Input() title!: string;

  @Output() changeStatus: EventEmitter<{ todo: Todo; status: boolean }> =
    new EventEmitter();
  @Output() updateTodo: EventEmitter<number> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter();

  todosCompleted: Todo[] = [];
  todosPending: Todo[] = [];
  isPending!: boolean;

  ngOnInit(): void {
    this.isPending = this.title == 'Pending Tasks';
    this.todosCompleted = this.todos.filter((t) => t.isCompleted);
    this.todosPending = this.todos.filter((t) => !t.isCompleted);
  }

  onChangeStatus(todo: Todo) {
    this.changeStatus.emit({ todo: todo, status: !todo.isCompleted });
  }

  onUpdateTodo(todo: Todo) {
    this.updateTodo.emit(todo.id);
  }

  onDeleteTodo(todo: Todo) {
    this.deleteTodo.emit(todo.id);
  }
}
