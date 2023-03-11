import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/service/Todo';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  updateTodo,
} from '../actions/todo.action';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const _todoReducer = createReducer(
  initialState,
  on(fetchTodos, (state, { todos }) => {
    return {
      ...state,
      todos: todos,
    };
  }),
  on(addTodo, (state, { todo }) => {
    return {
      ...state,
      todos: [...state.todos, todo],
    };
  }),
  on(updateTodo, (state, { id, todo }) => {
    return {
      ...state,
      todos: state.todos.map((t) => (t.id == id ? todo : t)),
    };
  }),
  on(deleteTodo, (state, { id }) => {
    return {
      ...state,
      todos: state.todos.filter((t) => t.id != id),
    };
  })
);

export const todoReducer = (state: any, action: any) => {
  return _todoReducer(state, action);
};
