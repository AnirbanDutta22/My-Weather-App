import { useWeather1 } from "../../contexts/WeatherContext";
import { iconForWeather } from "../../services/weatherServices";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/weather.module.css";
import SearchBar from "../SearchBar";
import Template from "../Template";
import ForecastDisplay from "./ForecastDisplay";
import RightBar from "./RightBar";
import WeatherDisplay from "./WeatherDisplay";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const { cityWeather, setCity } = useWeather1();

  return (
    cityWeather && (
      <Template
        left={
          <>
            <SearchBar setCity={setCity} />
            <div className={classes.displayContainer}>
              <div
                className={utils.flexbox}
                style={{ backgroundColor: "var(--main_color)" }}
              >
                <WeatherDisplay
                  padd="15px"
                  h1color="var(--navlink_bg)"
                  name={`${cityWeather.name}`}
                  description={`${cityWeather.description}`}
                  img={`${iconForWeather(cityWeather.icon)}`}
                  temp={`${cityWeather.temp.toFixed()}`}
                />
              </div>
              <div className={`${utils.flexbox} ${classes.smallBox}`}>
                <span>Hello</span>
              </div>
              <div className={`${utils.flexbox} ${classes.smallBox}`}>
                <span>Hello</span>
              </div>
              <div className={`${utils.flexbox} ${classes.smallBox}`}>
                <span>Hello</span>
              </div>
            </div>
            <ForecastDisplay cityWeather={cityWeather} />
            <WeatherInfo cityWeather={cityWeather} />
          </>
        }
        right={
          <>
            <RightBar cityWeather={cityWeather} />
          </>
        }
      />
    )
  );
}
