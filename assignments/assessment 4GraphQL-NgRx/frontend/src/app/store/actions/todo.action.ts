import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/service/Todo';

export const FETCH_TODOS = '[Todo Component] FETCH_TODOS';
export const UPDATE_TODO = '[Todo Component] UPDATE_TODO';
export const ADD_TODO = '[Todo Component] ADD_TODO';
export const DELETE_TODO = '[Todo Component] DELETE_TODO';

export const fetchTodos = createAction(FETCH_TODOS, props<{ todos: Todo[] }>());
export const addTodo = createAction(ADD_TODO, props<{ todo: Todo }>());
export const updateTodo = createAction(
  UPDATE_TODO,
  props<{ id: number; todo: Todo }>()
);
export const deleteTodo = createAction(DELETE_TODO, props<{ id: number }>());
