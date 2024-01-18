import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { iconForWeather } from "../../services/weatherServices";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/weather.module.css";
import SearchBar from "../SearchBar";
import Template from "../Template";
import { ContextCity1 } from "../WeatherPage";
import ForecastDisplay from "./ForecastDisplay";
import RightBar from "./RightBar";
import WeatherDisplay from "./WeatherDisplay";
import WeatherInfo from "./WeatherInfo";
export default function Weather() {
  const [setCity] = useOutletContext();
  const city1Weather = useContext(ContextCity1);

  return (
    <Template
      left={
        <>
          <SearchBar setCity={setCity} />
          <div className={classes.displayContainer}>
            <WeatherDisplay
              padd="0px"
              name={`${city1Weather.name}`}
              description={`${city1Weather.description}`}
              img={`${iconForWeather(city1Weather.icon)}`}
              temp={`${city1Weather.temp.toFixed()}`}
            />
            <div className={`${utils.flexbox} ${classes.smallBox}`}>
              <span>Sunrise</span>
              <span>Sunset</span>
            </div>
          </div>
          <ForecastDisplay />
          <WeatherInfo />
        </>
      }
      right={
        <>
          <RightBar />
        </>
      }
    />
  );
}
