import moment from "moment";
import { iconForWeather } from "../../services/weatherServices";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/forecast.module.css";
import { MyContext1 } from "../WeatherPage";
import SubForecast from "./SubForecast";

export default function ForecastDisplay() {
  return (
    <div className={`${classes.forecast} ${utils.flexbox}`}>
      <span>today's forecast</span>
      <div className={classes.subforecast}>
        <MyContext1.Consumer>
          {(data) => (
            <>
              {data.list.map((items, ind) => (
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
          )}
        </MyContext1.Consumer>
      </div>
    </div>
  );
}
