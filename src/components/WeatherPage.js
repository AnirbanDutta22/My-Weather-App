import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import getFormattedData from "../services/weatherServices";
import ids from "../styles/midbox.module.css";
import classes from "../styles/weatherMain.module.css";
import LeftBar from "./LeftBar";

export const MyContext1 = React.createContext();
export const MyContext2 = React.createContext();
export const MyContext3 = React.createContext();

export default function WeatherPage() {
  const [city, setCity] = useState({ q: "london" });
  const [city2, setCity2] = useState({ q: "berlin" });
  const [weather, setWeather] = useState(null);
  const [weather2, setWeather2] = useState(null);
  const [cityList, setCityList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await getFormattedData({ ...city }).then((data) => {
          setWeather(data);
          setIsLoading(false);
        });
      } catch (error) {
        window.alert("City not found");
      }
    };
    fetchWeather();
  }, [city]);

  useEffect(() => {
    const fetchWeather2 = async () => {
      try {
        await getFormattedData({ ...city2 }).then((data2) => {
          setWeather2(data2);
          setCityList([data2, ...cityList]);
          setIsLoading(false);
        });
      } catch (error) {
        window.alert("City not found");
      }
    };
    fetchWeather2();
  }, [city2]);

  return (
    <div className={`${classes.main}`}>
      {isLoading ? <div className={classes.loading}>Loading...</div> : null}
      {weather && (
        <>
          <MyContext1.Provider value={weather}>
            <MyContext2.Provider value={weather2}>
              <MyContext3.Provider value={cityList}>
                <LeftBar />
                <div className={ids.midBox}>
                  <Outlet context={[setCity, setCity2]} />
                </div>
              </MyContext3.Provider>
            </MyContext2.Provider>
          </MyContext1.Provider>
        </>
      )}
    </div>
  );
}
