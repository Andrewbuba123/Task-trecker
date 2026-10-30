import { Outlet } from "react-router-dom";
import { MainMenu } from "../MainMenu/MainMenu";

export const Layout = () => {
  return (
    <div className="main-page">
      <MainMenu />

      <div className="main-page__content">
        <Outlet />
      </div>
    </div>
  );
};
