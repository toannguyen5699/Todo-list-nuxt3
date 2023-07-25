export interface Todo {
  id: number;
  label: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoAdd {
  label: string;
}

export interface TodoUpdate {
  label?: string;
  done?: boolean;
}

export interface TodoState {
  items: Array<Todo>;
}

export type Todos = Todo[] | undefined[];
