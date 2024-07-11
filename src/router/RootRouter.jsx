import { Routes , Route } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages";
import PagenotFound from "../pages/404";
import Login from "../component/Login";
const RootRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PagenotFound />}/>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  );
};

export default RootRouter;
