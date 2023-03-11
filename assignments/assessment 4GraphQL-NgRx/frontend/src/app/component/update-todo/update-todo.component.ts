import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/service/Todo';
import { TodoService } from 'src/app/service/todo.service';
import { updateTodo } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss'],
})
export class UpdateTodoComponent implements OnInit {
  title!: string;
  description!: string;
  loading: boolean = false;
  id!: number;
  todo!: Todo;

  constructor(
    private store: Store,
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (value) => (this.id = parseInt(value['todoId'])),
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.loading = true;
    this.todoService.getTodo(this.id).subscribe(
      (value) => {
        this.title = <string>value.title;
        this.description = <string>value.description;
        this.todo = value;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  onSubmit(): void {
    this.loading = true;
    const reqBody: Todo = {
      id: this.id,
      title: this.title,
      description: this.description,
    };
    this.todoService.updateTodo(reqBody).subscribe(
      (value) => {
        this.store.dispatch(updateTodo({ id: this.id, todo: value }));
        this.loading = false;
        this.router.navigateByUrl('/list-todo');
      },
      (error) => {
        console.log(error);
        this.title = <string>this.todo.title;
        this.description = <string>this.todo.description;
        this.loading = false;
      }
    );
  }
}
