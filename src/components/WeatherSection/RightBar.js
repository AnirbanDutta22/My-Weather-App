import moment from "moment";
import { useContext } from "react";
import { iconForWeather } from "../../services/weatherServices";
import classes from "../../styles/weather/rightbar.module.css";
import { ContextCity1 } from "../WeatherPage";
import WeekForecast from "../WeatherSection/WeekForecast";
export default function RightBar() {
  const city1Weather = useContext(ContextCity1);
  return (
    <div className={classes.endBox}>
      <div className={classes.subBox}>
        <p>
          <span className="highlight">5 days </span>forecast
        </p>
        {/* <MyContext1.Consumer>
          {(data) => ( */}
        <>
          {city1Weather.listForWeek.map((items) => (
            <>
              <WeekForecast
                description={`${items.des}`}
                temp={`${items.temp.toFixed()}`}
                dayName={`${moment(items.time).format("ddd")}`}
                img={`${iconForWeather(items.icon)}`}
              />
            </>
          ))}
        </>
        {/* )}
        </MyContext1.Consumer> */}
      </div>
    </div>
  );
}
