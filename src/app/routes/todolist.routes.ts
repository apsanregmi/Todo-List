import { CreateTodoList } from '../pages/todolist/create.todolist';
import { TodoList } from '../pages/todolist/list.todolist';

type TodoRouteParams = {
  path: any;
  linkLabel?: string;
  content: any;
  isAuthenticated?: boolean;
};

const todoRoutes: TodoRouteParams[] = [
  {
    path: '/todolist/create',
    linkLabel: 'Create Todo',
    content: CreateTodoList,
    isAuthenticated: true,
  },

  {
    path: '/todolist/list',
    linkLabel: 'Todo Lists',
    content: TodoList,
    isAuthenticated: true,
  },
];

export default todoRoutes;
