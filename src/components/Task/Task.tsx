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
  userId,
}: TaskProps) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleTake = () => {
    onTake(id);
  };

  const handleComplete = () => {
    onComplete(id)
  }


  return (
    <li className="task">
      <div className="task__content">
        <h3 className="task__title">{title}</h3>
        <p className="task__description">{description}</p>
        <span className="task__count">Количество работников: {count}</span>
        <div className="task__buttons">
          <button className="button" onClick={handleDelete}>
            Удалить
          </button>
          <button className="button" onClick={handleTake}>Взять</button>
        </div>
      </div>
    </li>
  );
};
