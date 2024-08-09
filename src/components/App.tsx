import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";
// import { PrivateRoute } from "../routes";

const Home = lazy(() => import("../pages/Home"));
const Medicine = lazy(() => import("../pages/Medicine"));
const MedicineStore = lazy(() => import("../pages/MedicineStore"));
const Register = lazy(() => import("../pages/Register"));
const LogIn = lazy(() => import("../pages/LogIn"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="medicine-store" element={<MedicineStore />} />
        <Route path="medicine" element={<Medicine />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
