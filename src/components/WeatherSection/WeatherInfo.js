import drop from "../../assets/icons/drop.png";
import humidity from "../../assets/icons/humidity.png";
import pressure from "../../assets/icons/pressure.png";
import therm from "../../assets/icons/thermometer.png";
import visibility from "../../assets/icons/visibility.png";
import wind from "../../assets/icons/wind.png";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/information.module.css";
import { MyContext1 } from "../WeatherPage";

export default function WeatherInfo() {
  return (
    <>
      <div className={`${classes.subBox3} ${utils.flexbox}`}>
        <span>air conditions</span>
        <MyContext1.Consumer>
          {(data) => (
            <>
              <div className={classes.air_info}>
                <div className={classes.infos}>
                  <div>
                    <img src={drop} alt="" />
                  </div>
                  <div>
                    <span>Chance of rain</span>
                    <p>{data.cloud}%</p>
                  </div>
                </div>
                <div className={classes.infos}>
                  <div>
                    <img src={humidity} alt="" />
                  </div>
                  <div>
                    <span>humidity</span>
                    <p>{data.humidity}%</p>
                  </div>
                </div>
                <div className={classes.infos}>
                  <div>
                    <img src={therm} alt="" />
                  </div>
                  <div>
                    <span>Real feel</span>
                    <p>{data.feels_like}&deg;</p>
                  </div>
                </div>
                <div className={classes.infos}>
                  <div>
                    <img src={wind} alt="" />
                  </div>
                  <div>
                    <span>wind</span>
                    <p>{data.speed}km/h</p>
                  </div>
                </div>
                <div className={classes.infos}>
                  <div>
                    <img src={pressure} alt="" />
                  </div>
                  <div>
                    <span>pressure</span>
                    <p>{data.pressure}mb</p>
                  </div>
                </div>
                <div className={classes.infos}>
                  <div>
                    <img src={visibility} alt="" />
                  </div>
                  <div>
                    <span>visibility</span>
                    <p>{`${data.visibility / 1000}km`}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </MyContext1.Consumer>
      </div>
    </>
  );
}
