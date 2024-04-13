import moment from "moment";
import { iconForWeather } from "../../services/weatherServices";
import classes from "../../styles/weather/rightbar.module.css";
import WeekForecast from "../WeatherSection/WeekForecast";
export default function RightBar(props) {
  return (
    <div className={classes.endBox}>
      <div className={classes.subBox}>
        <p>
          <span className="highlight">5 days </span>forecast
        </p>
        {props.cityWeather.listForWeek.map((items, ind) => (
          <WeekForecast
            description={`${items.des}`}
            temp={`${items.temp.toFixed()}`}
            dayName={`${moment(items.time).format("ddd")}`}
            img={`${iconForWeather(items.icon)}`}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
}
