import MainLayout from "../Layout/MainLayout";
import { routePath } from "../constant/sidenav.constant";
import { EventForm, EventReport, Home, ProgressStatus } from "../pages";
import AddUser from "../pages/AddUser";
import AllUser from "../pages/AllUser";
import EditEvent from "../pages/EditEvent";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import User from "../pages/User";
import ViewEvent from "../pages/ViewEvent";

const { createBrowserRouter } = require("react-router-dom");

const PrivetRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
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
        path: "",
        element: <ErrorPage />,
      },
      {
        path: routePath.home,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/api/v1/events"),
      },
      {
        path: routePath.user,
        element: <User />,
        loader: () => fetch("http://localhost:5000/api/v1/events"),
        children: [
          {
            path: routePath.allUser,
            element: <AllUser />,
            loader: () => fetch("http://localhost:5000/api/v1/user"),
          },
          {
            path: routePath.addUser,
            element: <AddUser />,
          },
        ],
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
  {
    path: "/event/view/:id",
    element: <ViewEvent />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/api/v1/event/${params.id}`),
  },
]);

export default PrivetRoute;
