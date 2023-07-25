import { defineStore } from "pinia";
import {
  Todo,
  TodoAdd,
  Todos,
  TodoState,
  TodoUpdate,
} from "common/models/todo.model";

const state = (): TodoState => ({
  items: [],
});

const getters = {
  getTodoById: (state: TodoState) => {
    return (id: number) =>
      (state.items as any).find((item: Todo) => !!item && item.id === id);
  },
  getSortedTodos: (state: TodoState) => {
    return [...state.items].sort(
      (a: any, b: any) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  },
};

export const useTodoStore = defineStore("todoStore", {
  state,
  getters,
  actions: {
    add(todo: TodoAdd) {
      const id = Math.random();

      const itemToAdd = {
        id,
        ...todo,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      this.items.push(itemToAdd);
    },
    remove(id: number) {
      this.items = this.items.filter((item: Todo) => item.id !== id);
    },
    update(id: number, update: TodoUpdate) {
      const items = this.items as Todos;
      const index = items.findIndex(
        (item) => !!item && (item as Todo).id === id
      );
      items[index] = {
        ...items[index],
        ...update,
        updatedAt: new Date(),
      } as Todo;
    },
  },
});
