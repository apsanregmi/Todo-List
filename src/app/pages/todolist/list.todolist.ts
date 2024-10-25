import {
  DeleteConceptById,
  GetCompositionListListener,
  NORMAL,
} from 'mftsccs-browser';
import { StatefulWidget } from '../../default/StatefulWidget';
import { getLocalUserId } from '../user/login.service';
import './todo.style.css';

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

    // console.log('Edit item', this.data);
  }

  noItemFound(): string {
    if (this.todos.length === 0) {
      return '<p>No task created yet. </p>';
    }
    return '';
  }

  // addEvents() {
  //   let tableElement = this.getElementById('mainbody');
  //   if (tableElement) {
  //     if (this.todos.length > 0) {
  //       for (let i = 0; i < this.todos.length; i++) {
  //         let id = this.todos[i].the_todolist.id;

  //         // if the id is present and valid
  //         if (id) {
  //           let row = document.createElement('tr');
  //           let col1 = document.createElement('td');
  //           let col2 = document.createElement('td');
  //           let col3 = document.createElement('td');
  //           let col4 = document.createElement('td');
  //           let taskName = document.createElement('span');
  //           let taskNameValue = this.todos[i].the_todolist.taskName;
  //           let taskDescriptionValue =
  //             this.todos[i].the_todolist.taskDescription;
  //           taskName.innerHTML = taskNameValue;
  //           let taskDescription = document.createElement('span');
  //           taskDescription.innerHTML = taskDescriptionValue;
  //           let edit = document.createElement('button');

  //           edit.setAttribute('class', 'btn btn-primary');
  //           edit.setAttribute('padding', '10px');
  //           edit.id = this.todos[i].the_todolist.id;
  //           edit.innerHTML = 'edit';

  //           let del = document.createElement('button');
  //           del.setAttribute('class', 'btn btn-primary');
  //           del.setAttribute('padding', '10px');
  //           del.id = this.todos[i].the_todolist.id;
  //           del.innerHTML = 'Delete';
  //           del.onclick = () => {
  //             if (id) {
  //               DeleteConceptById(id).then(() => {
  //                 console.log('this is the delete notify');
  //               });
  //             }
  //           };

  //           let that = this;
  //           edit.onclick = () => {
  //             that.data = {
  //               id: edit.id,
  //               taskName: taskNameValue,
  //               taskDescription: taskDescriptionValue,
  //             };
  //             console.log(
  //               'this is the update click',
  //               that.data,
  //               that.subscribers
  //             );

  //             that.notify();
  //           };

  //           col1.append(taskName);
  //           col2.append(taskDescription);
  //           col3.append(del);
  //           col4.append(edit);

  //           row.appendChild(col1);
  //           row.appendChild(col2);
  //           row.appendChild(col3);
  //           row.appendChild(col4);
  //           console.log('ROW', row);
  //           tableElement.append(row);
  //         }
  //       }
  //     }
  //   }
  // }

  getHtml(): string {
    let html = '';

    html = `<div>
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
