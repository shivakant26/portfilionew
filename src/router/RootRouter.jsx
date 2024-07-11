import React, { Suspense, lazy} from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
const HomePage = lazy(() => import("../pages"));
const PagenotFound = lazy(() => import("../pages/404"));
const Login = lazy(() => import("../component/Login"));
const Dashboard = lazy(() => import("../pages/Dashbord"));
import ProtectedRoute from "./ProtecetdRoute";
import PublicRoute from "./PublicRoute";
import Loader from "../component/Loader";
const RootRouter = () => {
 
  return (
    <>
      <Suspense
        fallback={
          <div className="loader-wr">
            <Loader />
          </div>
        }
      >
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
      </Suspense>
    </>
  );
};

export default RootRouter;
