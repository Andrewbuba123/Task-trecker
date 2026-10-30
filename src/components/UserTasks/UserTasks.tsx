import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { completeTask, deleteTask, selectTasks } from "../../store/tasksSlice";
import { TaskList } from "../TaskList/TaskList";
import "./UserTasks.css";

export const UserTasks = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const userId = user?.id ?? null;

  const inProgressTasks = tasks.filter(
    (task) => task.assigneeId === user?.id && task.status === "InProgress",
  );
  const completedTasks = tasks.filter(
    (task) => task.assigneeId === user?.id && task.status === "Completed",
  );

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask({ id, userId }));
  };

  const handleCompleteTask = (id: string) => {
    dispatch(completeTask({ id, userId }));
  };

  return (
    <div className="user-tasks">
      <h2 className="user-tasks__title">Мои задачи</h2>
      <div className="user-tasks__content">
        <div className="user-tasks__content--inprogress">
          <span className="user-tasks__text">Задачи в разработке</span>
          <TaskList
            tasks={inProgressTasks}
            onDelete={handleDeleteTask}
            onComplete={handleCompleteTask}
            orientation="vertical"
            emptyState={true}
          />
        </div>
        <div className="user-tasks__content--completed">
          <span className="user-tasks__text">Выполненные задачи</span>
          <TaskList
            tasks={completedTasks}
            onDelete={handleDeleteTask}
            orientation="vertical"
            emptyState={false}
          />
        </div>
      </div>
    </div>
  );
};
