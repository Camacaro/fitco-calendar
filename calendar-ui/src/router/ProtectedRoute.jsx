import {Navigate, Outlet} from "react-router";

export const ProtectedRoute = ({ token }) => {
  if (!token) {
    return <Navigate replace to="/login" />;
  }

  return (
    <Outlet/>
  );
}
