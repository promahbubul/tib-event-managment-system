import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PrivetRoute from "./routes/PrivetRoute";
import EventContext from "./context/EventContext";

ReactDOM.render(
  <EventContext>
    <RouterProvider router={PrivetRoute} />{" "}
  </EventContext>,
  document.getElementById("root")
);
