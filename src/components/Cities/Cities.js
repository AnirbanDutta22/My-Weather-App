import moment from "moment";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { iconForWeather } from "../../services/weatherServices";
import utils from "../../styles/utilities.module.css";
import ids from "../../styles/weather/forecast.module.css";
import classes from "../../styles/weather/rightbar.module.css";
import SearchBar from "../SearchBar";
import Template from "../Template";
import { ContextCity2, ContextCityList } from "../WeatherPage";
import SubForecast from "../WeatherSection/SubForecast";
import WeatherDisplay from "../WeatherSection/WeatherDisplay";
import WeekForecast from "../WeatherSection/WeekForecast";

export default function Cities() {
  const [setCity, setCity2] = useOutletContext();
  const city2Weather = useContext(ContextCity2);
  const { city2List } = useContext(ContextCityList);

  return (
    <Template
      left={
        <>
          <SearchBar setCity={setCity2} />
          <div className="border">
            <div className={utils.flexbox}>
              {city2List.slice(0, 3).map((items) => (
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
                />
              ))}
            </div>
          </div>
        </>
      }
      right={
        <>
          <WeatherDisplay
            name={`${city2Weather.name}`}
            description={`${city2Weather.description}`}
            img={`${iconForWeather(city2Weather.icon)}`}
            temp={`${city2Weather.temp.toFixed()}`}
          />
          <div className={ids.forecast}>
            <p>
              <span className="highlight">today's </span>forecast
            </p>
            <div className={ids.subforecast}>
              {city2Weather.list.slice(0, 3).map((items) => (
                <>
                  <SubForecast
                    time={`${moment(items.time).format("hh:mm a")}`}
                    img={`${iconForWeather(items.icon)}`}
                    temp={`${items.temp.toFixed()}`}
                  />
                </>
              ))}
            </div>
          </div>
          <div className={classes.subBox}>
            <p>
              <span className="highlight">3 days </span>forecast
            </p>
            {city2Weather.listForWeek.slice(0, 3).map((items) => (
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
        </>
      }
    />
  );
}
