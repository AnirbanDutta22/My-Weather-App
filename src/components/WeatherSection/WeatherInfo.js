import { useContext } from "react";
import drop from "../../assets/icons/drop.png";
import humidity from "../../assets/icons/humidity.png";
import pressure from "../../assets/icons/pressure.png";
import therm from "../../assets/icons/thermometer.png";
import visibility from "../../assets/icons/visibility.png";
import wind from "../../assets/icons/wind.png";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/information.module.css";
import { ContextCity1 } from "../WeatherPage";

export default function WeatherInfo() {
  const city1Weather = useContext(ContextCity1);
  return (
    <>
      <div className={`${classes.subBox3} ${utils.flexbox}`}>
        <p>
          <span className="highlight">today's </span>Highlights
        </p>
        {/* <MyContext1.Consumer>
          {(city1Weather) => ( */}
        <>
          <div className={classes.air_info}>
            <div className={classes.infos}>
              <div>
                <img src={drop} alt="" />
              </div>
              <div>
                <span>Chance of rain</span>
                <p>{city1Weather.cloud}%</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={humidity} alt="" />
              </div>
              <div>
                <span>humidity</span>
                <p>{city1Weather.humidity}%</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={therm} alt="" />
              </div>
              <div>
                <span>Real feel</span>
                <p>{city1Weather.feels_like}&deg;</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={wind} alt="" />
              </div>
              <div>
                <span>wind</span>
                <p>{city1Weather.speed}km/h</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={pressure} alt="" />
              </div>
              <div>
                <span>pressure</span>
                <p>{city1Weather.pressure}mb</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={visibility} alt="" />
              </div>
              <div>
                <span>visibility</span>
                <p>{`${city1Weather.visibility / 1000}km`}</p>
              </div>
            </div>
          </div>
        </>
        {/* )}
        </MyContext1.Consumer> */}
      </div>
    </>
  );
}
