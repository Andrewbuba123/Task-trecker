import { PageForm } from "../PageForm/PageForm";
import { TaskList } from "../TaskList/TaskList";
import { HomePageProps } from "../../types";
import "./HomePage.css";

export const HomePage = ({
  tasks,
  onAddTask,
  onDeleteTask,
  onTakeTask,
}: HomePageProps) => {
  const activeTasks = tasks.filter((task) => task.status === "Active");

  return (
    <>
      <PageForm onAddTask={onAddTask} />
      <h2>Актуальные задачи:</h2>
      <TaskList
        tasks={activeTasks}
        onDelete={onDeleteTask}
        orientation="horizontal"
        onTake={onTakeTask}
        emptyState={false}
      />
    </>
  );
};
