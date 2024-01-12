import React from "react";
import "../styles/global.css";
import Home from "./Home";

export const MyContext = React.createContext();

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
