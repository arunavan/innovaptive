import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TodoService } from 'src/app/service/todo.service';
import { addTodo } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  title!: string;
  description!: string;
  loading: boolean = false;

  constructor(
    private store: Store,
    private todoService: TodoService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.loading = true;
    const reqBody = {
      title: this.title,
      description: this.description,
    };
    this.todoService.addTodo(reqBody).subscribe(
      (value) => {
        this.store.dispatch(addTodo({ todo: value }));
        this.loading = false;
        this.router.navigateByUrl('/list-todo');
      },
      (error) => {
        this.title = '';
        this.description = '';
        this.loading = false;
        console.log(error);
      }
    );
  }
}
