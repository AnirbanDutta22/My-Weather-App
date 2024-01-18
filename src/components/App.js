import React from "react";
import "../styles/global.css";
// import Home from "./Home";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Cities from "./Cities/Cities";
import Error from "./Error";
import Map from "./Map/Map";
import Settings from "./SettingsPage/Settings";
import Dashboard from "./UserAccount/Dashboard";
import SignIn from "./UserAccount/SignIn";
import SignUp from "./UserAccount/SignUp";
import User from "./UserAccount/User";
import WeatherPage from "./WeatherPage";
import Weather from "./WeatherSection/Weather";
import Welcome from "./Welcome";

export const MyContext = React.createContext();
export default function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              currentUser ? (
                <Navigate to="/weatherpage/weather" replace />
              ) : (
                <Welcome />
              )
            }
          />
          <Route exact path="/weatherpage" element={<WeatherPage />}>
            <Route exact path="" element={<Error />} />
            <Route exact path="/weatherpage/weather" element={<Weather />} />
            <Route exact path="/weatherpage/cities" element={<Cities />} />
            <Route exact path="/weatherpage/map" element={<Map />} />
            <Route exact path="/weatherpage/settings" element={<Settings />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/signin"
            element={
              currentUser ? <Navigate to="/dashboard" replace /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signup"
            element={
              currentUser ? <Navigate to="/dashboard" replace /> : <SignUp />
            }
          />
          <Route exact path="/user/settings" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}
