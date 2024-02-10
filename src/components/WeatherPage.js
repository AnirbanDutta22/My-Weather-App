import React from "react";
import { Outlet } from "react-router-dom";
import {
  ContextCity1,
  ContextCity2,
  ContextCity3,
} from "../contexts/WeatherContext";
import classes from "../styles/weatherMain.module.css";
import LeftBar from "./LeftBar";

export default function WeatherPage() {
  return (
    <div className={`${classes.main}`}>
      {/* {isLoading ? <div className={classes.loading}>Loading...</div> : null} */}
      <>
        <ContextCity1>
          <ContextCity2>
            <ContextCity3>
              <LeftBar />
              <div style={{ flexGrow: "1", display: "flex", fontSize: "1vw" }}>
                <Outlet />
              </div>
            </ContextCity3>
          </ContextCity2>
        </ContextCity1>
      </>
    </div>
  );
}
