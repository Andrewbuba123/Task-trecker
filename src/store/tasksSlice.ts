import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, AddTaskPayload, TaskActionPayload } from "../types";
import { DEMO_TASKS } from "../utils/demoData";
import type { RootState } from "./store";

const TASKS_KEY = "tasks";

const migrateTasks = (tasks: Task[]): Task[] =>
  tasks.map((task) =>
    (task.status as string) === "Inprogress"
      ? { ...task, status: "InProgress" }
      : task,
  );

export const loadTasks = (): Task[] => {
  try {
    const raw = localStorage.getItem(TASKS_KEY);
    return raw ? migrateTasks(JSON.parse(raw) as Task[]) : [...DEMO_TASKS];
  } catch {
    return [];
  }
};

export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      const { taskData, userId } = action.payload;
      const taskWithId: Task = {
        id: crypto.randomUUID(),
        title: taskData.title,
        description: taskData.description,
        count: taskData.count,
        status: taskData.status,
        authorId: userId,
        assigneeId: null,
      };
      return [...state, taskWithId];
    },

    deleteTask: (state, action: PayloadAction<TaskActionPayload>) => {
      const { id, userId } = action.payload;
      return state.filter((task) => task.id !== id || task.authorId !== userId);
    },

    takeTask: (state, action: PayloadAction<TaskActionPayload>) => {
      const { id, userId } = action.payload;
      return state.map((task) =>
        task.id === id && task.status === "Active" && task.authorId !== userId
          ? { ...task, assigneeId: userId, status: "InProgress" }
          : task,
      );
    },

    completeTask: (state, action: PayloadAction<TaskActionPayload>) => {
      const { id, userId } = action.payload;
      return state.map((task) =>
        task.id === id &&
        task.status === "InProgress" &&
        task.assigneeId === userId
          ? { ...task, status: "Completed" }
          : task,
      );
    },
  },
});

export const { addTask, deleteTask, takeTask, completeTask } =
  tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
