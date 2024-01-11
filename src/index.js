import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Cities from "./components/Cities/Cities";
import Map from "./components/Map/Map";
import Settings from "./components/SettingsPage/Settings";
import WeatherPage from "./components/WeatherPage";
import Weather from "./components/WeatherSection/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/WeatherPage",
    element: <WeatherPage />,
    children: [
      {
        path: "/WeatherPage/Weather",
        element: <Weather />,
      },
      {
        path: "/WeatherPage/Cities",
        element: <Cities />,
      },
      {
        path: "/WeatherPage/Map",
        element: <Map />,
      },
      {
        path: "/WeatherPage/Settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/user",
    element: <div>hello user</div>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
