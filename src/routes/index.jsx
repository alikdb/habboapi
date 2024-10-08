import { createBrowserRouter } from "react-router-dom";

import Home from "~/pages/home";
import Badges from "~/pages/badges";
import APIPage from "~/pages/api";
import WebLayout from "~/layouts/web";
import NotFound from "~/pages/not-found";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/badges",
        element: <Badges />,
      },
      {
        path: "/api",
        element: <APIPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
