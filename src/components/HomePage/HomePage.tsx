import { PageForm } from "../PageForm/pageForm";
import { TaskList } from "../TaskList/TaskList";
import { HomePageProps } from "../../types";
import "./HomePage.css"

export const HomePage = ({ tasks, onAddTask, onDeleteTask, onTakeTask }: HomePageProps) => {
  return (
    <>
      <PageForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} onDelete={onDeleteTask} orientation="horizontal" onTake={onTakeTask}/>
    </>
  );
};
