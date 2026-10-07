import { useAuth } from "../../hooks/useAuth";
import { TaskProps } from "../../types";
import { Button } from "../Button/Button";
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
            <Button  text="Удалить" onClick={handleDelete}></Button>
          )}
          {canTake && (
            <Button  text="Взять" onClick={handleTake}></Button>
          )}
          {canComplete && (
             <Button  text="Завершить" onClick={handleComplete}></Button>
          )}
        </div>
      </div>
    </li>
  );
};
