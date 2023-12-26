import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import Dashboard from "./pages/Dashboard.tsx";
import BuildResume from "./pages/BuildResume.tsx";
import { store } from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/build",
    element: <BuildResume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container flex flex-col items-center p-4 bg-white m-0 h-full shadow-xl">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
);
