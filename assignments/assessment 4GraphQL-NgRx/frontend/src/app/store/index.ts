import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { TodoState, todoReducer } from './reducers/todo.reducer';

export interface AppState {
  todo: TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('previous state:', state);
    console.log('action: ', action);
    const nextState = reducer(state, action);
    console.log('current state: ', state);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
