import { type FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
