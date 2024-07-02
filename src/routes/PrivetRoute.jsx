import MainLayout from "../Layout/MainLayout";
import { routePath } from "../constant/sidenav.constant";
import { EventForm, EventReport, Home, ProgressStatus } from "../pages";

const { createBrowserRouter } = require("react-router-dom");

const PrivetRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: routePath.home, element: <Home /> },
      { path: routePath.eventForm, element: <EventForm /> },
      { path: routePath.eventReport, element: <EventReport /> },
      { path: routePath.progressStatus, element: <ProgressStatus /> },
    ],
  },
]);

export default PrivetRoute;
