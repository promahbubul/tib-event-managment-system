import MainLayout from "../Layout/MainLayout";
import { routePath } from "../constant/sidenav.constant";
import { EventForm, EventReport, Home, ProgressStatus } from "../pages";
import AddUser from "../pages/AddUser";
import AllUser from "../pages/AllUser";
import EditEvent from "../pages/EditEvent";
import EditUser from "../pages/EditUser";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";
import User from "../pages/User";
import ViewEvent from "../pages/ViewEvent";

import Educations from "../pages/Education";
import Health from "../pages/Health";
import Land from "../pages/Land";
import Environment from "../pages/Environment";
import PrivetRoute from "./PrivetRoute";
import ViewEventAll from "../pages/ViewEventAll";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/",
    element: (
      <PrivetRoute>
        <MainLayout />
      </PrivetRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "",
      //   element: <ErrorPage />,
      // },
      {
        path: routePath.home,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/api/v1/events"),
      },
      {
        path: routePath.education,
        element: <Educations />,
      },
      {
        path: routePath.health,
        element: <Health />,
      },
      {
        path: routePath.land,
        element: <Land />,
      },
      {
        path: routePath.environment,
        element: <Environment />,
      },
      {
        path: routePath.profile,
        element: <Profile />,
        // loader: () => fetch("http://localhost:5000/api/v1/events"),
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
            path: routePath.editUser,
            element: <EditUser />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/api/v1/user/${params.id}`),
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
  {
    path: "/event/view-all",
    element: <ViewEventAll />,
    loader: ({ params }) => fetch(`http://localhost:5000/api/v1/events/`),
  },
]);

export default routes;
