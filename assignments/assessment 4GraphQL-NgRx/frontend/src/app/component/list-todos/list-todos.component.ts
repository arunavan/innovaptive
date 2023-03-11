import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, switchMap } from 'rxjs';
import { Todo } from 'src/app/service/Todo';
import { TodoService } from 'src/app/service/todo.service';
import { AppState } from 'src/app/store';
import { deleteTodo, fetchTodos } from 'src/app/store/actions/todo.action';
import { selectTodos } from 'src/app/store/selectors/todo.selector';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
})
export class ListTodosComponent implements OnInit {
  loading: boolean = true;
  todos: Todo[] = [];
  search: string = '';
  resetState: boolean = false;

  constructor(
    private todoService: TodoService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoService.listTodos().subscribe(
      (data) => {
        this.store.dispatch(fetchTodos({ todos: data }));
        this.store
          .select(selectTodos)
          .pipe(
            switchMap((todos) => {
              if (todos) {
                return of(todos);
              } else {
                return this.store.select(selectTodos);
              }
            })
          )
          .subscribe((value) => {
            this.todos = value;
            this.loading = false;
          });
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  onSearchTodo() {
    this.loading = true;
    this.resetState = true;
    this.todoService.searchTodos(this.search).subscribe(
      (value) => {
        this.todos = value;
        this.search = '';
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.todoService.listTodos().subscribe(
          (response) => {
            this.store.dispatch(fetchTodos({ todos: response }));
            this.store
              .select(selectTodos)
              .pipe(
                switchMap((todos) => {
                  if (todos) {
                    return of(todos);
                  } else {
                    return this.store.select(selectTodos);
                  }
                })
              )
              .subscribe((value) => {
                this.todos = value;
                this.search = '';
                this.loading = false;
              });
          },
          (error) => {
            console.log(error);
            this.search = '';
            this.loading = false;
          }
        );
      }
    );
  }

  onResetState() {
    this.loading = true;
    this.todoService.listTodos().subscribe(
      (value) => {
        this.todos = value;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
    this.resetState = false;
  }

  onChangeStatus(data: { todo: Todo; status: boolean }) {
    this.loading = true;
    const id = <number>data.todo.id;
    const reqBody = {
      id: id,
      isCompleted: data.status,
    };
    this.todoService.updateTodo(reqBody).subscribe(
      (value) => {
        this.todos = this.todos.map((t) => (t.id == id ? value : t));
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  onAddTodo() {
    this.router.navigateByUrl('/add-todo');
  }

  onUpdateTodo(id: number) {
    this.router.navigateByUrl(`/update-todo/${id}`);
  }

  onDeleteTodo(id: number) {
    this.loading = true;
    this.todoService.deleteTodo(id).subscribe(
      () => {
        this.store.dispatch(deleteTodo({ id }));
        this.store
          .select(selectTodos)
          .pipe(
            switchMap((todos) => {
              if (todos) {
                return of(todos);
              } else {
                return this.store.select(selectTodos);
              }
            })
          )
          .subscribe((value) => {
            this.todos = value;
            this.loading = false;
          });
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
