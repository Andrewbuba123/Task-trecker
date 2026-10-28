import { Outlet } from "react-router-dom";
import { MainMenu } from "../MainMenu/MainMenu";
import { LayoutProps } from "../../types";

export const Layout = ({ tasks }: LayoutProps) => {
  return (
    <div className="main-page">
      <MainMenu tasks={tasks} />

      <div className="main-page__content">
        <Outlet />
      </div>
    </div>
  );
};
