import {
  DeleteConceptById,
  GetCompositionListListener,
  NORMAL,
} from 'mftsccs-browser';
import { StatefulWidget } from '../../default/StatefulWidget';
import { getLocalUserId } from '../user/login.service';
import './todo.style.css';
import { Sidebar } from './sidebar';

export class TodoList extends StatefulWidget {
  todos: any = [];
  inpage: number = 10;
  page: number = 1;
  linker: string = 'console_folder_s';

  widgetDidMount(): void {
    let userId: number = getLocalUserId();
    GetCompositionListListener(
      'the_todolist',
      userId,
      this.inpage,
      this.page,
      NORMAL
    ).subscribe((output: any) => {
      this.todos = output;
      this.render();
    });
  }

  addEvents() {
    let tableElement = this.getElementById('mainbody');
    if (tableElement && this.todos.length > 0) {
      this.todos.forEach((todo: any) => {
        const id = todo.the_todolist.id;
        if (id) {
          const row = this.createTableRow(todo);
          tableElement.append(row);
        }
      });
    } else {
      const pElement = document.createElement('p');
      pElement.innerHTML = 'No task created yet';
      tableElement?.append(pElement);
    }
  }

  /* Create a table row with name,description and buttons(edit and delete) */
  createTableRow(todo: any): HTMLTableRowElement {
    const row = document.createElement('tr');

    const taskNameCell = this.createDataCell(todo.the_todolist?.taskName);
    const taskDescriptionCell = this.createDataCell(
      todo.the_todolist?.taskDescription
    );

    const deleteButtonCell = this.createButtonCell(
      'Delete',
      todo.the_todolist?.id,
      () => this.handleDelete(todo.the_todolist.id)
    );
    const editButtonCell = this.createButtonCell(
      'Edit',
      todo.the_todolist?.id,
      () => this.handleEdit(todo)
    );

    row.append(
      taskNameCell,
      taskDescriptionCell,
      deleteButtonCell,
      editButtonCell
    );
    return row;
  }

  /* Create a data cell with td element */
  createDataCell(value: string): HTMLTableCellElement {
    const cell = document.createElement('td');
    const span = document.createElement('span');
    span.innerHTML = value;
    cell.append(span);
    return cell;
  }

  /* Create a data cell for edit and delete buttons with td element */
  createButtonCell(
    label: string,
    id: string,
    onClickHandler: () => void
  ): HTMLTableCellElement {
    const cell = document.createElement('td');
    const button = document.createElement('button');

    button.setAttribute('class', 'btn btn-primary');
    button.setAttribute('padding', '10px');

    button.id = id;
    button.innerHTML = label;
    button.onclick = onClickHandler;

    cell.append(button);
    return cell;
  }

  async handleDelete(id: number): Promise<void> {
    if (id) {
      await DeleteConceptById(id);
    }
  }

  handleEdit(todo: any): void {
    this.data = {
      id: todo.the_todolist.id,
      taskName: todo.the_todolist.taskName,
      taskDescription: todo.the_todolist.taskDescription,
    };
    this.notify();
  }

  getHtml(): string {
    let html = '';

    html = `
            ${new Sidebar().getHtml()}
            <div>
                <table>
                <thead>
                  <tr>
                      <th>Task Name</th>
                      <th>Task Description</th>
                      <th>Delete</th>
                      <th>Edit</th>
                  </tr>
                </thead>
                <tbody id= mainbody>
                </tbody>
                </table>

                </div>`;
    return html;
  }
}
