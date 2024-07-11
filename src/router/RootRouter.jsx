import { Routes, Route } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages";
import PagenotFound from "../pages/404";
import Login from "../component/Login";
import Dashboard from "../pages/Dashbord";
import ProtectedRoute from "./ProtecetdRoute";
import PublicRoute from "./PublicRoute";
const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PagenotFound />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default RootRouter;
