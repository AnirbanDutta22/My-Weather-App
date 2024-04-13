import SearchBar from "../components/SearchBar";
import Template from "../components/Template";
import ForecastDisplay from "../components/Weather Section/ForecastDisplay";
import RightBar from "../components/Weather Section/RightBar";
import WeatherDisplay from "../components/Weather Section/WeatherDisplay";
import WeatherInfo from "../components/Weather Section/WeatherInfo";
import { useWeather1 } from "../contexts/WeatherContext";
import { iconForWeather } from "../services/weatherServices";
import utils from "../styles/utilities.module.css";
import classes from "../styles/weather/weather.module.css";

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
