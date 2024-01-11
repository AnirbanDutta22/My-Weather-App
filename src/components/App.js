import React from "react";
import "../styles/global.css";
import Home from "./Home";

export const MyContext = React.createContext();

export default function App() {
  // const fetchWeather = async () => {
  //   const data = await getFormattedData({ q: "siliguri" });

  //   console.log(data);
  // };

  // fetchWeather();

  return (
    <>
      <Home />
    </>
  );
}
