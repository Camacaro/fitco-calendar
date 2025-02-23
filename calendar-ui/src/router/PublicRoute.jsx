import {Navigate, Outlet} from "react-router";

export const PublicRoute = ({ token }) => {
  if (token) {
    return <Navigate replace to="/" />;
  }

  return (
    <Outlet/>
  );
}
