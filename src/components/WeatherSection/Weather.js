import { useOutletContext } from "react-router-dom";
import { iconForWeather } from "../../services/weatherServices";
import classes from "../../styles/weather/weather.module.css";
import SearchBar from "../SearchBar";
import { MyContext1 } from "../WeatherPage";
import ForecastDisplay from "./ForecastDisplay";
import RightBar from "./RightBar";
import WeatherDisplay from "./WeatherDisplay";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [setCity, setCity2] = useOutletContext();
  // const { weather1 } = useContext(MyContext1);

  return (
    <MyContext1.Consumer>
      {(weather1) => (
        <>
          <div className={classes.midSection}>
            <div className={classes.leftbar}>
              <SearchBar setCity={setCity} />
              <WeatherDisplay
                name={`${weather1.name}`}
                description={`${weather1.description}`}
                img={`${iconForWeather(weather1.icon)}`}
                temp={`${weather1.temp.toFixed()}`}
              />
              <ForecastDisplay />
              <WeatherInfo />
            </div>
            <div className={classes.rightbar}>
              <RightBar />
            </div>
          </div>
        </>
      )}
    </MyContext1.Consumer>
  );
}
