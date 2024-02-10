import drop from "../../assets/icons/drop.png";
import humidity from "../../assets/icons/humidity.png";
import pressure from "../../assets/icons/pressure.png";
import therm from "../../assets/icons/thermometer.png";
import visibility from "../../assets/icons/visibility.png";
import wind from "../../assets/icons/wind.png";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/information.module.css";

export default function WeatherInfo(props) {
  // const props.city1Weather = useContext(ContextCity1);
  return (
    <>
      <div className={`${classes.subBox3} ${utils.flexbox}`}>
        <p>
          <span className="highlight">today's </span>Highlights
        </p>

        <>
          <div className={classes.air_info}>
            <div className={classes.infos}>
              <div>
                <img src={drop} alt="" />
              </div>
              <div>
                <span>Chance of rain</span>
                <p>{props.cityWeather.cloud}%</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={humidity} alt="" />
              </div>
              <div>
                <span>humidity</span>
                <p>{props.cityWeather.humidity}%</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={therm} alt="" />
              </div>
              <div>
                <span>Real feel</span>
                <p>{props.cityWeather.feels_like}&deg;</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={wind} alt="" />
              </div>
              <div>
                <span>wind</span>
                <p>{props.cityWeather.speed}km/h</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={pressure} alt="" />
              </div>
              <div>
                <span>pressure</span>
                <p>{props.cityWeather.pressure}mb</p>
              </div>
            </div>
            <div className={classes.infos}>
              <div>
                <img src={visibility} alt="" />
              </div>
              <div>
                <span>visibility</span>
                <p>{`${props.cityWeather.visibility / 1000}km`}</p>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
