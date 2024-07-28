import MainLayout from "../Layout/MainLayout";
import { routePath } from "../constant/sidenav.constant";
import { EventForm, EventReport, Home, ProgressStatus } from "../pages";
import EditEvent from "../pages/EditEvent";
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
      {
        path: routePath.home,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/api/v1/events"),
      },
      { path: routePath.eventForm, element: <EventForm /> },
      {
        path: routePath.eventReport,
        element: <EventReport />,
        loader: () => fetch("http://localhost:5000/api/v1/events"),
      },
      { path: routePath.progressStatus, element: <ProgressStatus /> },
      {
        path: "event/edit/:id",
        element: <EditEvent />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/event/${params.id}`),
      },
    ],
  },
]);

export default PrivetRoute;
