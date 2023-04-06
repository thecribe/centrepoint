import React from "react";
import "./styles.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Project from "./pages/Project";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<p>ttesting Routing</p>} />
      <Route path="/start-a-project" element={<Project />} />
    </Route>
  ),
  { basename: "/centrepoint" }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
