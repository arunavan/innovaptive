import { gql } from 'apollo-angular';

export const LIST_TODOS = gql`
  query listTodos {
    todos {
      _id
      id
      title
      description
      isCompleted
    }
  }
`;

export const GET_TODO = gql`
  query getTodoDetails($id: Int!) {
    getTodo(id: $id) {
      _id
      id
      title
      description
      isCompleted
    }
  }
`;

export const SEARCH_TODO = gql`
  query searchTodos($title: String!) {
    searchTodo(title: $title) {
      _id
      id
      title
      description
      isCompleted
    }
  }
`;
