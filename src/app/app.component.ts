import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ITask, TasksAdd, TasksDelete } from 'src/store/model/tasks.model';
import { TasksState } from 'src/store/tasks.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store) {}

  newTodo = '';
  tasksList: ITask[] = [];

  ngOnInit() {
    this.store
      .select(TasksState.getTasks)
      .subscribe((task) => (this.tasksList = task));
  }

  addTodo() {
    this.store.dispatch(
      new TasksAdd({
        id: this.tasksList.length,
        task: this.newTodo,
        isDone: false,
      })
    );
    console.log(this.tasksList);
  }

  deleteTodo(index: number) {
    this.store.dispatch(new TasksDelete(index));
  }
}
