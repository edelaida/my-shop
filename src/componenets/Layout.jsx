import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header.jsx";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
