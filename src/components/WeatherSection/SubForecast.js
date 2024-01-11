import classes from "../../styles/weather/forecast.module.css";

export default function SubForecast(props) {
  return (
    <div className={classes.forecasts}>
      <p>{props.time}</p>
      <p>
        <img src={props.img} alt="" />
      </p>
      <p>{props.temp}&deg;</p>
    </div>
  );
}
