import './todo.style.css';

export class Sidebar {
  showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage?.classList.add('show');

    setTimeout(() => {
      successMessage?.classList.remove('show');
    }, 4000);
  }

  getSuccessHtml(): string {
    return `
      <div class="success-message" id="successMessage">
            <p>✅ Action successful</p>
      </div>
      `;
  }

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
