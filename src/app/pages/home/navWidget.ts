export default class NavWidget {
  isLoggedIn: boolean;

  constructor(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  getHtml(): string {
    if (this.isLoggedIn) {
      return `
           <ul class="nav-links">
          <li><a href="/todos">Todo</a></li>
          <li><a href="/todolist/create">Create</a></li>
          <li><a href="/todolist/list">List</a></li>
        </ul>       
        `;
    } else {
      return '';
    }
  }
}
