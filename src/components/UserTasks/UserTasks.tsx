import { useAuth } from "../../hooks/useAuth";
import { TasksPageProps } from "../../types";
import { TaskList } from "../TaskList/TaskList";
import "./UserTasks.css";

export const UserTasks = ({ tasks, onDeleteTask, onCompleteTask }: TasksPageProps) => {

  const {user} = useAuth();

  const inProgressTasks = tasks.filter(
    (task) => task.assigneeId === user?.id && task.status === "Inprogress",
  );
  const completedTasks = tasks.filter(
    (task) => task.assigneeId === user?.id  && task.status === "Completed",
  );

  return (
    <div className="user-tasks">
      <h2 className="user-tasks__title">Мои задачи</h2>
      <div className="user-tasks__content">
        <div className="user-tasks__content--inprogress">
          <span className="user-tasks__text">Задачи в разработке</span>
          <TaskList
            tasks={inProgressTasks}
            onDelete={onDeleteTask}
            onComplete={onCompleteTask}
            orientation="vertical"
            emptyState={true}
          />
        </div>
        <div className="user-tasks__content--completed">
          <span className="user-tasks__text">Выполненные задачи</span>
          <TaskList
            tasks={completedTasks}
            onDelete={onDeleteTask}
            orientation="vertical"
            emptyState={false}
          />
        </div>
      </div>
    </div>
  );
};
