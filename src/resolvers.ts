import { Context } from './db';

const resolvers = {
  Query: {
    users: async (parent: any, args: any, context: Context) => {
      return context.prisma.user.findMany();
    },
    user: async (parent: any, args: { id: number }, context: Context) => {
      return context.prisma.user.findUnique({ where: { id: args.id } });
    },
    todos: async (parent: any, args: any, context: Context) => {
      return context.prisma.todo.findMany();
    },
    todo: async (parent: any, args: { id: number }, context: Context) => {
      return context.prisma.todo.findUnique({ where: { id: args.id } });
    },
    todosByUser: async (
      parent: any,
      args: { userId: number },
      context: Context
    ) => {
      return context.prisma.user
        .findUnique({ where: { id: args.userId } })
        .todos();
    },
  },
  Mutation: {
    createUser: async (parent: any, args: { data: any }, context: Context) => {
      return context.prisma.user.create({ data: args.data });
    },
    updateUser: async (
      parent: any,
      args: { id: number; data: any },
      context: Context
    ) => {
      return context.prisma.user.update({
        where: { id: args.id },
        data: args.data,
      });
    },
    deleteUser: async (parent: any, args: { id: number }, context: Context) => {
      return context.prisma.user.delete({ where: { id: args.id } });
    },
    createTodo: async (parent: any, args: { data: any }, context: Context) => {
      return context.prisma.todo.create({ data: args.data });
    },
    updateTodo: async (
      parent: any,
      args: { id: number; data: any },
      context: Context
    ) => {
      return context.prisma.todo.update({
        where: { id: args.id },
        data: args.data,
      });
    },
    deleteTodo: async (parent: any, args: { id: number }, context: Context) => {
      return context.prisma.todo.delete({ where: { id: args.id } });
    },
    loginUser: async (
      parent: any,
      args: { email: string },
      context: Context
    ) => {
      return context.prisma.user.findUnique({ where: { email: args.email } });
    },
  },
  User: {
    todos: async (parent: any, args: any, context: Context) => {
      return context.prisma.user
        .findUnique({ where: { id: parent.id } })
        .todos();
    },
  },
  Todo: {
    owner: async (parent: any, args: any, context: Context) => {
      return context.prisma.todo
        .findUnique({ where: { id: parent.id } })
        .owner();
    },
  },
};

export default resolvers;
