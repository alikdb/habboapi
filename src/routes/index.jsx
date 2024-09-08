import { createBrowserRouter } from "react-router-dom";

import Home from "~/pages/home";
import Badges from "~/pages/badges";
import WebLayout from "~/layouts/web";
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
    ],
  },
]);

export default routes;
