import { StatefulWidget } from '../../default/StatefulWidget';
import { CreateTodoList } from './create.todolist';
import { TodoList } from './list.todolist';

export class todos extends StatefulWidget {
  mountChildWidgets(): void {
    let widget1 = this.getElementById('widget1');
    let widget2 = this.getElementById('widget2');
    let creating = new CreateTodoList();
    let listing = new TodoList();

    if (widget1) {
      this.childWidgets.push(creating);
      creating.mount(widget1);
    }
    if (widget2) {
      listing.dataChange((value: any) => {
        this.UpdateChildData(value, creating);
      });
      this.childWidgets.push(listing);
      listing.mount(widget2);
    }
  }

  getHtml(): string {
    let html = `<div class="flex-container">
                    <div id= "widget1"></div>
                </div>
                <div class="flex-container">
                    <div id ="widget2"></div>
                </div>`;

    return html;
  }
}
