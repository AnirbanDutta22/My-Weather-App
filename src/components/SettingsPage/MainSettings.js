import { useAuth } from "../../contexts/AuthContext";
import classes from "../../styles/settingsStyle/settings.module.css";
import utils from "../../styles/utilities.module.css";
import Options from "./Options";
import ToggleOption from "./ToggleOption";

export default function MainSettings() {
  const { currentUser } = useAuth();

  return (
    <div className={classes.settingsContainer}>
      <div>
        <span className="highlight">units</span>
        <div className={`${utils.flexbox} ${classes.subSettings}`}>
          <Options category="temparature" title={["celcius", "fahrenheit"]} />
          <Options category="winds" title={["km/h", "m/s", "knots"]} />
          <Options category="pressure" title={["hPa", "inches", "kPa", "mm"]} />
          <Options category="distance" title={["kilometers", "miles"]} />
          <Options category="percipitation" title={["milimeters", "inches"]} />
        </div>
      </div>
      {currentUser && (
        <div>
          <span className="highlight">notifications</span>
          <div className={`${utils.flexbox} ${classes.subSettings}`}>
            <Options title={["morning", "afternoon", "evening", "never"]} />
          </div>
        </div>
      )}
      <div>
        <span className="highlight">general</span>
        <div className={`${utils.flexbox} ${classes.subSettings}`}>
          <ToggleOption title="12-hour time" />
          <ToggleOption title="dark mode" />
          <ToggleOption title="location" />
        </div>
      </div>
    </div>
  );
}
