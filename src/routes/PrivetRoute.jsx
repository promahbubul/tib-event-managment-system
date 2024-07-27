import MainLayout from "../Layout/MainLayout";
import { routePath } from "../constant/sidenav.constant";
import { EventForm, EventReport, Home, ProgressStatus } from "../pages";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const { createBrowserRouter } = require("react-router-dom");

const PrivetRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      { path: routePath.home, element: <Home /> },
      { path: routePath.eventForm, element: <EventForm /> },
      {
        path: routePath.eventReport,
        element: <EventReport />,
        loader: () => fetch("http://localhost:5000/api/v1/events"),
      },
      { path: routePath.progressStatus, element: <ProgressStatus /> },
    ],
  },
]);

export default PrivetRoute;
