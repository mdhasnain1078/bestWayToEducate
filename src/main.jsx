import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage";
import LoadingPage from "./pages/LoadingPage";
import FinalPage from "./pages/FinalPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homepage />}></Route>
      <Route path="/LoadingPage" element={<LoadingPage />}></Route>
      <Route path="/FinalPage" element={<FinalPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
