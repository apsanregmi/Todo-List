// import {
//   CreateTheConnectionLocal,
//   LocalSyncData,
//   MakeTheInstanceConceptLocal,
//   PatcherStructure,
//   PRIVATE,
//   UpdateComposition,
// } from 'mftsccs-browser';
import {
  CreateTheConnectionLocal,
  LocalSyncData,
  MakeTheInstanceConcept,
  PRIVATE,
} from 'mftsccs-browser';
import { StatefulWidget } from '../../default/StatefulWidget';
import { getLocalUserId } from '../user/login.service';
import './todolist.style.css';

export class CreateTodoList extends StatefulWidget {
  async addEvents(): Promise<void> {
    let userId = getLocalUserId() as number;
    let order = 1;
    let taskName = this.getElementById('taskName') as HTMLInputElement;
    let taskDescription = this.getElementById(
      'taskDescription'
    ) as HTMLInputElement;
    let buttonSubmit = this.getElementById('submit');

    if (buttonSubmit) {
      buttonSubmit.addEventListener('click', async (e: Event) => {
        e.preventDefault();

        try {
          console.log('Button is clicked for task', {
            userId,
            taskName: taskName.value,
            taskDescription: taskDescription.value,
          });

          /* New Instance and connections for a task */
          const mainConcept = await MakeTheInstanceConcept(
            'the_todolist',
            '',
            true,
            userId,
            PRIVATE
          );

          const taskNameConcept = await MakeTheInstanceConcept(
            'taskName',
            taskName.value,
            false,
            userId,
            PRIVATE
          );

          const taskDescriptionConcept = await MakeTheInstanceConcept(
            'taskDescription',
            taskDescription.value,
            false,
            userId,
            PRIVATE
          );

          // Create connection for task name
          await CreateTheConnectionLocal(
            mainConcept.id,
            taskNameConcept.id,
            mainConcept.id,
            order,
            '',
            userId
          );

          // Create connection for description
          await CreateTheConnectionLocal(
            mainConcept.id,
            taskDescriptionConcept.id,
            mainConcept.id,
            order,
            '',
            userId
          );

          // Syncing data online after creation
          await LocalSyncData.SyncDataOnline();
        } catch (error) {
          // Log an error message if something goes wrong
          console.error('Error during data submission:', error);
        }
      });
    }
  }

  getHtml(): string {
    let html = '';
    html = `<div class="container">
          <form>
              <div>
                  <input type=number id=id hidden>
                  <div class="formbody">
                      <label>Task Name</label>
                      <input type=text id="taskName" placeholder="Enter task name">
                  </div>
                  <div class="formbody">
                      <label>Task Description</label>
                      <input type=text id="taskDescription" placeholder="Enter task description">
                  </div>
                  <button class="btn btn-primary" id="submit" type=submit>Submit</button>
              </div>
          </form>
          </div>`;
    return html;
  }
}
