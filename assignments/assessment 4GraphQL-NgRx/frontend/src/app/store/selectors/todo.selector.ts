import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { TodoState } from '../reducers/todo.reducer';

const selectTodoState = createFeatureSelector<AppState, TodoState>('todo');

export const selectTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);
