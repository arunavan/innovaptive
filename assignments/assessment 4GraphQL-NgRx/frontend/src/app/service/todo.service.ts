import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TODO, LIST_TODOS, SEARCH_TODO } from '../graphql/queries';
import { Observable, map } from 'rxjs';
import { Todo } from './Todo';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../graphql/mutations';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private apollo: Apollo) {}

  listTodos(): Observable<Todo[]> {
    return this.apollo.query({ query: LIST_TODOS }).pipe(
      map((result: any) => {
        return result.data.todos;
      })
    );
  }

  getTodo(id: number): Observable<Todo> {
    return this.apollo
      .query({
        query: GET_TODO,
        variables: {
          id: id,
        },
      })
      .pipe(
        map((result: any) => {
          return result.data.getTodo;
        })
      );
  }

  searchTodos(title: string): Observable<Todo[]> {
    return this.apollo
      .query({
        query: SEARCH_TODO,
        variables: {
          title: title,
        },
      })
      .pipe(
        map((result: any) => {
          return result.data.searchTodo;
        })
      );
  }

  addTodo(reqBody: Todo): Observable<Todo> {
    return this.apollo
      .mutate({
        mutation: ADD_TODO,
        refetchQueries: [{ query: LIST_TODOS }],
        variables: {
          input: reqBody,
        },
      })
      .pipe(
        map((result: any) => {
          console.log(result.data.addTodo);
          return result.data.addTodo;
        })
      );
  }

  updateTodo(reqBody: Todo): Observable<Todo> {
    return this.apollo
      .mutate({
        mutation: UPDATE_TODO,
        refetchQueries: [{ query: LIST_TODOS }],
        variables: {
          input: reqBody,
        },
      })
      .pipe(
        map((result: any) => {
          return result.data.updateTodo;
        })
      );
  }

  deleteTodo(id: Number): Observable<Todo> {
    return this.apollo
      .mutate({
        mutation: DELETE_TODO,
        refetchQueries: [{ query: LIST_TODOS }],
        variables: {
          id: id,
        },
      })
      .pipe(
        map((result: any) => {
          return result.data.deleteTodo;
        })
      );
  }
}
