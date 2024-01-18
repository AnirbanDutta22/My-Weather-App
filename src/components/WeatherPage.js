import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import getFormattedData from "../services/weatherServices";
import classes from "../styles/weatherMain.module.css";
import LeftBar from "./LeftBar";

export const ContextCity1 = React.createContext();
export const ContextCity2 = React.createContext();
export const ContextCity3 = React.createContext();
export const ContextCityList = React.createContext();

export default function WeatherPage() {
  const [city1, setCity1] = useState({ q: "london" });
  const [city1Weather, setCity1Weather] = useState(null);
  const [city2, setCity2] = useState({ q: "berlin" });
  const [city2List, setCity2List] = useState([]);
  const [city2Weather, setCity2Weather] = useState(null);
  const [city3, setCity3] = useState({ q: "delhi" });
  const [city3List, setCity3List] = useState([]);
  const [city3Weather, setCity3Weather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await getFormattedData({ ...city1 }).then((data) => {
          setCity1Weather(data);
          setIsLoading(false);
        });
      } catch (error) {
        window.alert("City not found");
      }
    };
    fetchWeather();
  }, [city1]);

  useEffect(() => {
    const fetchWeather2 = async () => {
      try {
        await getFormattedData({ ...city2 }).then((data2) => {
          setCity2Weather(data2);
          setCity2List([data2, ...city2List]);
          setIsLoading(false);
        });
      } catch (error) {
        window.alert("City not found");
      }
    };
    fetchWeather2();
  }, [city2]);

  useEffect(() => {
    const fetchWeather3 = async () => {
      try {
        await getFormattedData({ ...city3 }).then((data3) => {
          setCity3Weather(data3);
          setCity3List([data3, ...city3List]);
          setIsLoading(false);
        });
      } catch (error) {
        window.alert("City not found");
      }
    };
    fetchWeather3();
  }, [city3]);

  return (
    <div className={`${classes.main}`}>
      {isLoading ? <div className={classes.loading}>Loading...</div> : null}
      {city1Weather && (
        <>
          <ContextCity1.Provider value={city1Weather}>
            <ContextCity2.Provider value={city2Weather}>
              <ContextCity3.Provider value={city3Weather}>
                <ContextCityList.Provider value={{ city2List, city3List }}>
                  <LeftBar />
                  <div
                    style={{ flexGrow: "1", display: "flex", fontSize: "1vw" }}
                  >
                    <Outlet context={[setCity1, setCity2, setCity3]} />
                  </div>
                </ContextCityList.Provider>
              </ContextCity3.Provider>
            </ContextCity2.Provider>
          </ContextCity1.Provider>
        </>
      )}
    </div>
  );
}
