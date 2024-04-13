import classes from "../../styles/weather/weekforecast.module.css";

export default function WeekForecast(props) {
  return (
    <>
      <div className={classes.forecasts}>
        <div className={classes.info}>{props.dayName}</div>
        <div className={classes.info}>
          <img src={props.img} alt="" />
          <span>{props.description}</span>
        </div>
        <div className={classes.info}>
          <span>{props.temp}&deg;</span>
        </div>
      </div>
    </>
  );
}
