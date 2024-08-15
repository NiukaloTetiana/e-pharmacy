import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { selectIsLogin, selectIsRefreshing } from "../redux/auth/selectors";

interface IPrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const location = useLocation();
  const isRefreshing = "";
  // useSelector(selectIsRefreshing);
  const isLogin = "";
  // useSelector(selectIsLogin);

  if (!isLogin && !isRefreshing) {
    return <Navigate state={{ from: location }} to="/login" />;
  }

  return children;
};
