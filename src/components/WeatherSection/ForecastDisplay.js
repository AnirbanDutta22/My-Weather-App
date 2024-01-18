import moment from "moment";
import { useContext } from "react";
import { iconForWeather } from "../../services/weatherServices";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/forecast.module.css";
import { ContextCity1 } from "../WeatherPage";
import SubForecast from "./SubForecast";

export default function ForecastDisplay() {
  const city1Weather = useContext(ContextCity1);
  return (
    <div className={`${classes.forecast} ${utils.flexbox}`}>
      <p>
        <span className="highlight">today's </span>forecast
      </p>
      <div className={classes.subforecast}>
        {/* <ContextCity1.Consumer>
          {(data) => ( */}
        <>
          {city1Weather.list.map((items, ind) => (
            <>
              <SubForecast
                time={`${moment(items.time).format("hh:mm a")}`}
                img={`${iconForWeather(items.icon)}`}
                temp={`${items.temp.toFixed()}`}
                key={ind}
              />
            </>
          ))}
        </>
        {/* )}
        </ContextCity1.Consumer> */}
      </div>
    </div>
  );
}
