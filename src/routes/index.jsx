import { createBrowserRouter } from "react-router-dom";

import Home from "~/pages/home";
import Badges from "~/pages/badges";
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
