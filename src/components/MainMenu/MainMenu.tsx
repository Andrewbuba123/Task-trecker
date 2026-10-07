import "./MainMenu.css";
import { MainMenuProps } from "../../types";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const MainMenu = ({ tasks }: MainMenuProps) => {
  const { user, logout } = useAuth();

  const userInitial = user?.login ? user.login.charAt(0).toUpperCase() : "?";
  const userTasks = tasks.filter(
    (task) => task.status === "Inprogress" && task.assigneeId === user?.id,
  );
  const userTasksCount = userTasks.length;

  return (
    <nav className="main-menu">
      <div className="main-menu__title">Меню</div>

      <ul className="main-menu__list">
        <li className="main-menu__item">
          <NavLink to="/" end className="main-menu__link">
            Главная
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink to="/tasks" className="main-menu__link">
            Мои задачи({userTasksCount})
          </NavLink>
        </li>
      </ul>

      <div className="main-menu__user">
        <div className="main-menu__user-info">
          <div className="main-menu__user-avatar">{userInitial}</div>
        </div>
        <button type="button" className="main-menu__logout" onClick={logout}>
          Выйти
        </button>
      </div>
    </nav>
  );
};
