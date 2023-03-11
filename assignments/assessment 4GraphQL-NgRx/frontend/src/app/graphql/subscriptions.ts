import { gql } from 'apollo-angular';

export const SUBSCRIBE_TODO = gql`
  subscription todo {
    todo {
      mutation
      data {
        isCompleted
        description
        isDeleted
        title
        id
        _id
      }
    }
  }
`;
