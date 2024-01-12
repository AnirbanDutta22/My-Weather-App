import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Cities from "./components/Cities/Cities";
import Map from "./components/Map/Map";
import Settings from "./components/SettingsPage/Settings";
import Dashboard from "./components/UserAccount/Dashboard";
import SignIn from "./components/UserAccount/SignIn";
import SignUp from "./components/UserAccount/SignUp";
import WeatherPage from "./components/WeatherPage";
import Weather from "./components/WeatherSection/Weather";
import Authprovider from "./contexts/AuthContext";
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
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
