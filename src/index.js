import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import EventContext from "./context/EventContext";
import UserContext from "./context/UserContext";
import routes from "./routes/routes";

ReactDOM.render(
  <UserContext>
    <EventContext>
      <RouterProvider router={routes} />
    </EventContext>
  </UserContext>,
  document.getElementById("root")
);
