import './todo.style.css';

export class Sidebar {
  getHtml(): string {
    return `
          <div id="sidebar" class="sidebar">
          <nav>
          <ul class="nav-links">
               <li><a href="/todos">Todos</a></li>
               <li><a href="/todolist/create">Create</a></li>
               <li><a href="/todolist/list">List</a></li>
          </ul>
          </nav>
          </div>
`;
  }
}
