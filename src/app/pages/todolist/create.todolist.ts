import {
  CreateTheConnectionLocal,
  LocalSyncData,
  MakeTheInstanceConceptLocal,
  PRIVATE,
} from 'mftsccs-browser';
import { StatefulWidget } from '../../default/StatefulWidget';
import { getLocalUserId } from '../user/login.service';
import './todolist.style.css';

export class CreateTodoList extends StatefulWidget {
  async addEvents(): Promise<void> {
    let userId: number = getLocalUserId();
    let order = 1;
    let taskName = this.getElementById('taskName') as HTMLInputElement;
    let taskDescription = this.getElementById(
      'taskDescription'
    ) as HTMLInputElement;

    let buttonSubmit = this.getElementById('submit');
    if (buttonSubmit) {
      buttonSubmit.onclick = async (ev: Event) => {
        ev.preventDefault();

        try {
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

          console.log('Task successfully created and synced.');
        } catch (error) {
          console.error('Error during task creation:', error);
        }
      };
    }
  }

  // addEvents(): void {
  //   let userId: number = getLocalUserId();
  //   let order = 1;
  //   let taskName = this.getElementById('taskName') as HTMLInputElement;
  //   let taskDescription = this.getElementById(
  //     'taskDescription'
  //   ) as HTMLInputElement;

  //   let buttonSubmit = this.getElementById('submit');
  //   if (buttonSubmit) {
  //     buttonSubmit.onclick = (ev: Event) => {
  //       ev.preventDefault();

  //       MakeTheInstanceConceptLocal(
  //         'the_todolist',
  //         '',
  //         true,
  //         userId,
  //         PRIVATE
  //       ).then((mainConcept) => {
  //         MakeTheInstanceConceptLocal(
  //           'taskName',
  //           taskName.value,
  //           false,
  //           userId,
  //           PRIVATE
  //         ).then((taskNameConcept) => {
  //           MakeTheInstanceConceptLocal(
  //             'taskDescription',
  //             taskDescription.value,
  //             false,
  //             userId,
  //             PRIVATE
  //           ).then((taskDescriptionConcept) => {
  //             CreateTheConnectionLocal(
  //               mainConcept.id,
  //               taskNameConcept.id,
  //               mainConcept.id,
  //               order,
  //               '',
  //               userId
  //             ).then(() => {
  //               CreateTheConnectionLocal(
  //                 mainConcept.id,
  //                 taskDescriptionConcept.id,
  //                 mainConcept.id,
  //                 order,
  //                 '',
  //                 userId
  //               ).then(() => {
  //                 LocalSyncData.SyncDataOnline();
  //               });
  //             });
  //           });
  //         });
  //       });
  //     };
  //   }
  // }

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
