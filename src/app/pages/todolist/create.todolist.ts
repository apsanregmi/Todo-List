import {
  CreateTheConnectionLocal,
  LocalSyncData,
  MakeTheInstanceConceptLocal,
  PatcherStructure,
  PRIVATE,
  UpdateComposition,
} from 'mftsccs-browser';
import { StatefulWidget } from '../../default/StatefulWidget';
import { getLocalUserId } from '../user/login.service';
import './todo.style.css';
import { Sidebar } from './sidebar';

export class CreateTodoList extends StatefulWidget {
  async addEvents(): Promise<void> {
    let userId: number = getLocalUserId();
    let order = 1;
    let taskName = this.getElementById('taskName') as HTMLInputElement;
    let taskDescription = this.getElementById(
      'taskDescription'
    ) as HTMLInputElement;
    let id = this.getElementById('id') as HTMLInputElement;

    if (this.data) {
      taskName.value = this.data.taskName;
      taskDescription.value = this.data.taskDescription;
      id.value = this.data.id;
    }

    let buttonSubmit = this.getElementById('submit');
    if (buttonSubmit) {
      buttonSubmit.onclick = async (ev: Event) => {
        ev.preventDefault();

        try {
          if (id.value) {
            const patcherStructure: PatcherStructure = new PatcherStructure();
            patcherStructure.compositionId = Number(id.value);
            patcherStructure.patchObject = {
              taskName: taskName.value,
              taskDescription: taskDescription.value,
            };

            await UpdateComposition(patcherStructure);
            new Sidebar().showSuccessMessage();

            taskName.value = '';
            taskDescription.value = '';
            id.value = '';
          } else {
            const mainConcept = await MakeTheInstanceConceptLocal(
              'the_todolist',
              '',
              true,
              userId,
              PRIVATE
            );

            const taskNameConcept = await MakeTheInstanceConceptLocal(
              'taskName',
              taskName.value,
              false,
              userId,
              PRIVATE
            );

            const taskDescriptionConcept = await MakeTheInstanceConceptLocal(
              'taskDescription',
              taskDescription.value,
              false,
              userId,
              PRIVATE
            );

            await CreateTheConnectionLocal(
              mainConcept.id,
              taskNameConcept.id,
              mainConcept.id,
              order,
              '',
              userId
            );

            await CreateTheConnectionLocal(
              mainConcept.id,
              taskDescriptionConcept.id,
              mainConcept.id,
              order,
              '',
              userId
            );

            await LocalSyncData.SyncDataOnline();

            new Sidebar().showSuccessMessage();

            // Reset the form fields after successful creation or update
            taskName.value = '';
            taskDescription.value = '';
            id.value = '';
          }
        } catch (error) {
          console.error('Error during task creation:', error);
        }
      };
    }
  }

  getHtml(): string {
    let html = `
    ${new Sidebar().getHtml()}
    ${new Sidebar().getSuccessHtml()}
    <div class="task-container">
    <h2 class="task-form-title">Create a Task</h2>
    <form>
        <div>
            <input type="number" id="id" hidden>
            <div class="task-form-body">
                <label>Task Name</label>
                <input type="text" id="taskName" placeholder="Enter task name">
            </div>
            <div class="task-form-body">
                <label>Task Description</label>
                <input type="text" id="taskDescription" placeholder="Enter task description">
            </div>
            <button class="btn btn-primary" id="submit" type="submit">Submit</button>
        </div>
    </form>
</div>
`;
    return html;
  }
}
