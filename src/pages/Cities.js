import moment from "moment";
import utils from "../../styles/utilities.module.css";
import ids from "../../styles/weather/forecast.module.css";
import classes from "../../styles/weather/rightbar.module.css";
import SearchBar from "../components/SearchBar";
import Template from "../components/Template";
import SubForecast from "../components/WeatherSection/SubForecast";
import WeatherDisplay from "../components/WeatherSection/WeatherDisplay";
import WeekForecast from "../components/WeatherSection/WeekForecast";
import { useWeather2 } from "../contexts/WeatherContext";
import { iconForWeather } from "../services/weatherServices";

export default function Cities() {
  const { cityWeather, setCity, cityList } = useWeather2();
  return (
    <Template
      left={
        <>
          <SearchBar setCity={setCity} />
          <div className="border">
            <div className={utils.flexbox}>
              {cityList.slice(0, 3).map((items, ind) => (
                <WeatherDisplay
                  flexd="row"
                  align="center"
                  flexb="55%"
                  brad="10px"
                  bg="var(--main_bg)"
                  ml="0px"
                  tempmargin="0px"
                  padd="2vw"
                  fsize="2.8vw"
                  shadow="inset 7px 7px 7px rgba(0, 0, 0, 0.1)"
                  name={`${items.name}`}
                  description={`${moment(items.dt).format("HH:mm a")}`}
                  img={`${iconForWeather(items.icon)}`}
                  temp={`${items.temp.toFixed()}`}
                  key={ind}
                />
              ))}
            </div>
          </div>
        </>
      }
      right={
        <>
          <WeatherDisplay
            name={`${cityWeather.name}`}
            description={`${cityWeather.description}`}
            img={`${iconForWeather(cityWeather.icon)}`}
            temp={`${cityWeather.temp.toFixed()}`}
          />
          <div className={ids.forecast}>
            <p>
              <span className="highlight">today's </span>forecast
            </p>
            <div className={ids.subforecast}>
              {cityWeather.list.slice(0, 3).map((items, ind) => (
                <div key={ind}>
                  <SubForecast
                    time={`${moment(items.time).format("hh:mm a")}`}
                    img={`${iconForWeather(items.icon)}`}
                    temp={`${items.temp.toFixed()}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={classes.subBox}>
            <p>
              <span className="highlight">3 days </span>forecast
            </p>
            {cityWeather.listForWeek.slice(0, 3).map((items, ind) => (
              <div key={ind}>
                <WeekForecast
                  description={`${items.des}`}
                  temp={`${items.temp.toFixed()}`}
                  dayName={`${moment(items.time).format("ddd")}`}
                  img={`${iconForWeather(items.icon)}`}
                />
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}
