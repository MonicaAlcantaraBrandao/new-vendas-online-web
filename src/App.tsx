import type { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

import { categoryScreens } from "./modules/category/routes";
import { firstScreenRoutes } from "./modules/firstScreen/routes";
import { loginRoutes } from "./modules/login/routes";
import { productScreens } from "./modules/product/routes";
import { verifyLoggedIn } from "./shared/functions/connection/auth";
import { useNotification } from "./shared/hooks/useNotification";
import { useGlobalReducer } from "./store/reducers/globalReducer/useGlobalReducer";

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalReducer();

  const routes: RouteObject[] = [...loginRoutes];
  const routesLoggedIn: RouteObject[] = [
    ...productScreens,
    ...categoryScreens,
    ...firstScreenRoutes,
  ].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(setUser, user),
  }));

  const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
