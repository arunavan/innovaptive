import { gql } from 'apollo-angular';

export const ADD_TODO = gql`
  mutation addTodo($input: AddTodoInput!) {
    addTodo(input: $input) {
      id
      _id
      title
      description
      isCompleted
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      id
      _id
      title
      description
      isCompleted
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
      _id
      title
      description
      isCompleted
      isDeleted
    }
  }
`;
