import { Task } from "../Task/Task";
import { Task as TaskType, TaskListProps } from "../../types";
import { Link } from "react-router-dom";
import "./TaskList.css";

export const TaskList = ({ tasks, onDelete , orientation = "vertical" , onTake, onComplete }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <div className="task-list-empty__icon">📝</div>
        <h2 className="task-list-empty__title">Список задач пуст</h2>
        <p className="task-list-empty__text">
          Самое время добавить первую задачу
        </p>
        <Link to="/" className="task-list-empty__link">
          + Добавить задачу
        </Link>
      </div>
    );
  }

  return (
    <ul className={`task-list task-list--${orientation}`}>
      {tasks.map((task: TaskType) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          count={task.count}
          onDelete={onDelete}
          onTake={onTake}
          onComplete={onComplete}
          status={task.status}
          userId={task.userId}
        />
      ))}
    </ul>
  );
};
