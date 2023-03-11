export interface Todo {
  _id?: string;
  id?: number;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ListTodoGroup {
  data: { todos: Todo[] };
}

export interface GetTodoGroup {
  data: { getTodo: Todo };
}

export interface SearchTodoGroup {
  data: { searchTodo: Todo[] };
}

export interface AddTodoGroup {
  data: { addTodo: Todo };
}

export interface UpdateTodoGroup {
  data: { updateTodo: Todo };
}

export interface DeleteTodoGroup {
  data: { deleteTodo: Todo };
}
