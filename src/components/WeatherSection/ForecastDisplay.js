import moment from "moment";
import { iconForWeather } from "../../services/weatherServices";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/forecast.module.css";
import SubForecast from "./SubForecast";

export default function ForecastDisplay(props) {
  return (
    <div className={`${classes.forecast} ${utils.flexbox}`}>
      <p>
        <span className="highlight">today's </span>forecast
      </p>
      <div className={classes.subforecast}>
        <>
          {props.cityWeather.list.map((items, ind) => (
            <div key={ind}>
              <SubForecast
                time={`${moment(items.time).format("hh:mm a")}`}
                img={`${iconForWeather(items.icon)}`}
                temp={`${items.temp.toFixed()}`}
              />
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
