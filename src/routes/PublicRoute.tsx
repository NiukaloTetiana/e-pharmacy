import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { selectIsLogin } from "../redux/auth/selectors";

interface IPublicRouteProps {
  children: ReactNode;
}

export const PublicRoute = ({ children }: IPublicRouteProps) => {
  const location = useLocation();
  const isLogin = "";
  // useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to={location.state?.from || "/medicine"} />;
  }
  return children;
};
