import { CreateTodoList } from '../pages/todolist/create.todolist';

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
];

export default todoRoutes;
