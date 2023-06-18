const typeDefs = `
  type User {
    id: Int
    email: String
    name: String
    todos: [Todo]
  }
  
  type Todo {
    id: Int
    text: String
    completed: Boolean
    createdAt: String
    updatedAt: String
    owner: User
  }
  
  input CreateUserInput {
    email: String!
    name: String
  }
  
  input UpdateUserInput {
    email: String
    name: String
  }
  
  input CreateTodoInput {
    text: String!
    completed: Boolean
    userId: Int!
  }
  
  input UpdateTodoInput {
    text: String
    completed: Boolean
  }
  
  type Query {
    users: [User]
    user(id: Int!): User
    todos: [Todo]
    todo(id: Int!): Todo
    todosByUser(userId: Int!): [Todo]
  }
  
  type Mutation {
    createUser(data: CreateUserInput!): User
    updateUser(id: Int!, data: UpdateUserInput!): User
    deleteUser(id: Int!): User
    createTodo(data: CreateTodoInput!): Todo
    updateTodo(id: Int!, data: UpdateTodoInput!): Todo
    deleteTodo(id: Int!): Todo
    loginUser(email: String!): User
  }
  
  schema {
    query: Query
    mutation: Mutation
  }  
`;

export default typeDefs;
