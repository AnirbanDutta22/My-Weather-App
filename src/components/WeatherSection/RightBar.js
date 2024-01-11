import moment from "moment";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/rightbar.module.css";
// import classes from "../../styles/weather/weekforecast.module.css";
import { iconForWeather } from "../../services/weatherServices";
import { MyContext1 } from "../WeatherPage";
import WeekForecast from "../WeatherSection/WeekForecast";
export default function RightBar() {
  return (
    <div className={`${classes.endBox} ${utils.flexbox}`}>
      <div className={classes.subBox}>
        <span>5 days forecast</span>
        <MyContext1.Consumer>
          {(data) => (
            <>
              {data.listForWeek.map((items) => (
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
          )}
        </MyContext1.Consumer>
      </div>
    </div>
  );
}
