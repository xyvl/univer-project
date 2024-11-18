import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './global.scss'
import Main from "./page/Main"
import { AboutUs } from "./page/AboutUs"
import { AboutProject } from "./page/AboutProject"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about_us",
    element: <AboutUs />,
  },
  {
    path: "/about_project",
    element: <AboutProject />,
  }
]);
root.render(
  <RouterProvider router={router}/>
);
