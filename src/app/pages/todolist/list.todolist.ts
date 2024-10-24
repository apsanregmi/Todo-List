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
  //   linker: string = 'console_folder_s';

  widgetDidMount(): void {
    let userId: number = getLocalUserId();
    GetCompositionListListener(
      'the_todolist',
      userId,
      this.inpage,
      this.page,
      NORMAL
    ).subscribe((output: any) => {
      console.log('🚀 ~ TodoList ~ ).subscribe ~ output:', output);
      this.todos = output;
      this.render();
    });
  }

  addEvents() {
    let tableElement = this.getElementById('mainbody');
    if (tableElement) {
      if (this.todos.length > 0) {
        for (let i = 0; i < this.todos.length; i++) {
          let id = this.todos[i].the_todolist.id;

          // if the id is present and valid
          if (id) {
            let row = document.createElement('tr');
            console.log('🚀 ~ TodoList ~ addEvents ~ row:', row);
            let col1 = document.createElement('td');
            let col2 = document.createElement('td');
            let col3 = document.createElement('td');
            let col4 = document.createElement('td');
            let taskName = document.createElement('span');
            let taskNameValue = this.todos[i].the_todolist.taskName;
            let taskDescriptionValue =
              this.todos[i].the_todolist.taskDescription;
            taskName.innerHTML = taskNameValue;
            let taskDescription = document.createElement('span');
            taskDescription.innerHTML = taskDescriptionValue;
            let edit = document.createElement('button');

            edit.setAttribute('class', 'btn btn-primary');
            edit.setAttribute('padding', '10px');
            edit.id = this.todos[i].the_todolist.id;
            edit.innerHTML = 'edit';

            let del = document.createElement('button');
            del.setAttribute('class', 'btn btn-primary');
            del.setAttribute('padding', '10px');
            del.id = this.todos[i].the_todolist.id;
            del.innerHTML = 'Delete';
            del.onclick = () => {
              if (id) {
                DeleteConceptById(id).then(() => {
                  console.log('this is the delete notify');
                });
              }
            };

            let that = this;
            edit.onclick = () => {
              that.data = {
                id: edit.id,
                taskName: taskNameValue,
                taskDescription: taskDescriptionValue,
              };
              console.log(
                'this is the update click',
                that.data,
                that.subscribers
              );

              that.notify();
            };

            col1.append(taskName);
            col2.append(taskDescription);
            col3.append(del);
            col4.append(edit);

            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
            console.log('ROW', row);
            tableElement.append(row);
          }
        }
      }
    }
  }

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
