import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee.jsx";
import UpdateEmployee from "./pages/UpdateEmployee.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/add-employee", element: <AddEmployee /> },
  { path: "/update-employee/:employeeId", element: <UpdateEmployee /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
