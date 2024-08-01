import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PrivetRoute from "./routes/PrivetRoute";
import EventContext from "./context/EventContext";
import UserContext from "./context/UserContext";

ReactDOM.render(
  <EventContext>
    <UserContext>
      <RouterProvider router={PrivetRoute} />
    </UserContext>
  </EventContext>,
  document.getElementById("root")
);
