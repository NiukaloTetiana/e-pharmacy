import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";
// import { PrivateRoute } from "../routes";

const HomePage = lazy(() => import("../pages/HomePage"));
const MedicinePage = lazy(() => import("../pages/MedicinePage"));
const MedicineStorePage = lazy(() => import("../pages/MedicineStorePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const Description = lazy(() => import("./Description/Description"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/medicine-store" element={<MedicineStorePage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage />}>
          <Route path="description" element={<Description />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
