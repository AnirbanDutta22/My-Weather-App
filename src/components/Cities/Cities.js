import moment from "moment";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { iconForWeather } from "../../services/weatherServices";
import ids from "../../styles/cities/cities.module.css";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/weather.module.css";
import SearchBar from "../SearchBar";
import { MyContext2, MyContext3 } from "../WeatherPage";
import SubForecast from "../WeatherSection/SubForecast";
import WeatherDisplay from "../WeatherSection/WeatherDisplay";
import WeekForecast from "../WeatherSection/WeekForecast";

export default function Cities() {
  const [setCity, setCity2] = useOutletContext();
  const weather2 = useContext(MyContext2);
  const cityList = useContext(MyContext3);

  return (
    <div className={ids.parentMid}>
      <div className={`${classes.midSection} ${ids.midSectionForCities}`}>
        <SearchBar setCity={setCity2} />
        <div className={`${ids.border} ${utils.flexbox}`}>
          {cityList.slice(0, 3).map((items) => (
            <WeatherDisplay
              flexd="row"
              align="center"
              flexb="55%"
              brad="10px"
              bg="lightgrey"
              ml="0px"
              tempmargin="0px"
              padd="2vw"
              descr="none"
              fsize="2.8vw"
              name={`${items.name}`}
              description={`${items.description}`}
              img={`${iconForWeather(items.icon)}`}
              temp={`${items.temp.toFixed()}`}
            />
          ))}
        </div>
      </div>
      <div className={`${classes.rightbar} ${utils.flexbox}`}>
        <WeatherDisplay
          name={`${weather2.name}`}
          description={`${weather2.description}`}
          img={`${iconForWeather(weather2.icon)}`}
          temp={`${weather2.temp.toFixed()}`}
        />
        <span>today's forecast</span>
        <div className={classes.forecast}>
          {weather2.list.slice(0, 3).map((items) => (
            <>
              <SubForecast
                time={`${moment(items.time).format("hh:mm a")}`}
                img={`${iconForWeather(items.icon)}`}
                temp={`${items.temp.toFixed()}`}
              />
            </>
          ))}
        </div>
        <span>3 days forecast</span>
        <div className={classes.weekForecast}>
          {weather2.listForWeek.slice(0, 3).map((items) => (
            <>
              <WeekForecast
                description={`${items.des}`}
                temp={`${items.temp.toFixed()}`}
                dayName={`${moment(items.time).format("ddd")}`}
                img={`${iconForWeather(items.icon)}`}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
