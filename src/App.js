import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import JobsPage from "./Components/JobsPage";
import EmployeePage from "./Components/EmployeePage";
import Error from "./Components/Error";

//domain - dev-eyy8cosz.us.auth0.com
// client l0lng4MNFZFI6C2JECxZ3uyvuKGqpK2z
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },

  {
    path: "/job",
    element: <JobsPage />,
  },
  {
    path: "/employee",
    element: <EmployeePage />,
  },
]);
const App = () => {
  return (
    <RouterProvider router={approuter}>
      <Outlet />
    </RouterProvider>
  );
};

export default App;
