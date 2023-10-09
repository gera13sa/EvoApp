export interface ITask {
  id: number | null;
  task: string | null;
  isDone: boolean | null;
}

export class TasksAdd {
  static readonly type = '[Task]: Task Add';
  constructor(public payload: ITask) {}
}

export class TasksDelete {
  static readonly type = '[Task]: Task Delete';
  constructor(public id: number) {}
}
