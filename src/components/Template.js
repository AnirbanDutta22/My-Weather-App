import utils from "../styles/utilities.module.css";
import classes from "../styles/weather/weather.module.css";

export default function Template(props) {
  return (
    <>
      <div className={classes.midSection}>
        <div className={classes.leftbar}>{props.left}</div>
        <div className={classes.rightbar}>
          <div className={utils.flexbox}>{props.right}</div>
        </div>
      </div>
    </>
  );
}
