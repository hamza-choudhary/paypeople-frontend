import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ROUTES, PrivateRoute } from "@routes";
import { Home } from "@pages/home";
import { Unauthorized } from "@pages/unauthorized";

const createPrivateRoute = (Component) => {
  return (
    <PrivateRoute>
      <Component />
    </PrivateRoute>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path={ROUTES.HOME} element={createPrivateRoute(Home)} /> */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.UN_AUTHORIZED} element={<Unauthorized />} />
    </>
  )
);