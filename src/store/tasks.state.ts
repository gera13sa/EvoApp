import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ITask, TasksAdd, TasksDelete } from './model/tasks.model';
import { patch, removeItem } from '@ngxs/store/operators';
import { Observable } from 'rxjs';

@State<ITask[]>({
  name: 'tasks',
  defaults: [],
})
@Injectable()
export class TasksState {
  @Selector()
  static getTasks(state: ITask[]): ITask[] {
    return state;
  }

  @Action(TasksAdd)
  addTask(ctx: StateContext<ITask[]>, action: TasksAdd) {
    ctx.setState([
      ...ctx.getState(),
      {
        id: action.payload.id,
        task: action.payload.task,
        isDone: action.payload.isDone,
      },
    ]);
  }

  @Action(TasksDelete)
  removeTask(ctx: StateContext<ITask[]>, action: TasksDelete) {
    const state = ctx.getState();
    const filteredTasks = state.filter((task) => task.id !== action.id);
    ctx.setState(filteredTasks);
  }
}
