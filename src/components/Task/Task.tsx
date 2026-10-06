import { useAuth } from "../../hooks/useAuth";
import { TaskProps } from "../../types";
import "./Task.css";

export const Task = ({
  id,
  title,
  description,
  count,
  onDelete,
  onTake,
  onComplete,
  status,
  authorId,
  assigneeId,
}: TaskProps) => {
  const { user } = useAuth();
  const canDelete = authorId === user?.id;
  const canTake = status === "Active" && authorId !== user?.id;
  const canComplete = status === "Inprogress" && assigneeId === user?.id;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleTake = () => {
    onTake?.(id);
  };

  const handleComplete = () => {
    onComplete?.(id);
  };

  return (
    <li className="task">
      <div className="task__content">
        <h3 className="task__title">{title}</h3>
        <p className="task__description">{description}</p>
        <span className="task__count">Количество работников: {count}</span>
        <div className="task__buttons">
          {canDelete && (
            <button className="button" onClick={handleDelete}>
              Удалить
            </button>
          )}
          {canTake && (
            <button className="button" onClick={handleTake}>
              Взять
            </button>
          )}
          {canComplete && (
            <button className="button" onClick={handleComplete}>
              Завершить
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
