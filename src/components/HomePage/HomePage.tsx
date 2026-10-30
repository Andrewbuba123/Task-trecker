import { PageForm } from "../PageForm/PageForm";
import { TaskList } from "../TaskList/TaskList";
import { TaskFormData } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addTask,
  deleteTask,
  selectTasks,
  takeTask,
} from "../../store/tasksSlice";
import "./HomePage.css";

export const HomePage = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const userId = user?.id ?? null;

  const activeTasks = tasks.filter((task) => task.status === "Active");

  const handleAddTask = (taskData: TaskFormData) => {
    dispatch(addTask({ taskData, userId }));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask({ id, userId }));
  };

  const handleTakeTask = (id: string) => {
    dispatch(takeTask({ id, userId }));
  };

  return (
    <>
      <PageForm onAddTask={handleAddTask} />
      <h2>Актуальные задачи:</h2>
      <TaskList
        tasks={activeTasks}
        onDelete={handleDeleteTask}
        orientation="horizontal"
        onTake={handleTakeTask}
        emptyState={false}
      />
    </>
  );
};
