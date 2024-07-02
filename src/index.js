import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PrivetRoute from "./routes/PrivetRoute";

const root = document.getElementById("root");

ReactDOM.render(<RouterProvider router={PrivetRoute} />, root);
