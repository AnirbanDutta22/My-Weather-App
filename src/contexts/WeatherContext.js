import React, { useContext, useEffect, useState } from "react";
import getFormattedData from "../services/weatherServices";

const WeatherContext1 = React.createContext();
const WeatherContext2 = React.createContext();
const WeatherContext3 = React.createContext();

export function useWeather1() {
  return useContext(WeatherContext1);
}
export function useWeather2() {
  return useContext(WeatherContext2);
}
export function useWeather3() {
  return useContext(WeatherContext3);
}

export function ContextCity1({ children }) {
  const [city, setCity] = useState({ q: "london" });
  const [cityWeather, setCityWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await getFormattedData({ ...city }).then((data) => {
          setCityWeather(data);
          setIsLoading(false);
        });
      } catch (error) {
        window.alert("City not found");
      }
    };
    fetchWeather();
  }, [city]);

  const value = {
    cityWeather,
    setCity,
  };

  return (
    <WeatherContext1.Provider value={value}>
      {!isLoading && children}
    </WeatherContext1.Provider>
  );
}
export function ContextCity2({ children }) {
  const [city, setCity] = useState({ q: "berlin" });
  const [cityList, setCityList] = useState([]);
  const [cityWeather, setCityWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await getFormattedData({ ...city }).then((data) => {
          setCityWeather(data);
          setCityList([data, ...cityList]);
          setIsLoading(false);
        });
      } catch (error) {
        window.alert("City not found");
      }
    };
    fetchWeather();
  }, [city]);

  const value = {
    cityWeather,
    setCity,
    cityList,
  };

  return (
    <WeatherContext2.Provider value={value}>
      {!isLoading && children}
    </WeatherContext2.Provider>
  );
}
export function ContextCity3({ children }) {
  const [city, setCity] = useState({ q: "delhi" });
  const [cityList, setCityList] = useState([]);
  const [cityWeather, setCityWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await getFormattedData({ ...city }).then((data) => {
          setCityWeather(data);
          setCityList([data, ...cityList]);
          setIsLoading(false);
        });
      } catch (error) {
        window.alert("City not found");
      }
    };
    fetchWeather();
  }, [city]);

  const value = {
    cityWeather,
    setCity,
    cityList,
  };

  return (
    <WeatherContext3.Provider value={value}>
      {!isLoading && children}
    </WeatherContext3.Provider>
  );
}
