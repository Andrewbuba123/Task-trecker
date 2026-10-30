import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { loadTasks, saveTasks } from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: loadTasks(),
  },
});

store.subscribe(() => {
  saveTasks(store.getState().tasks);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
