import { useAuth } from "../../contexts/AuthContext";
import classes from "../../styles/settingsStyle/settings.module.css";
import utils from "../../styles/utilities.module.css";
import Options from "./Options";
import ToggleButtons from "./ToggleOption";

export default function MainSettings() {
  const { currentUser } = useAuth();

  return (
    <div className={classes.settingsContainer}>
      <div>
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
          <div className={`${utils.flexbox} ${classes.subSettings}`}>
            <Options title={["morning", "afternoon", "evening", "never"]} />
          </div>
        </div>
      )}
      <div>
        <div className={`${utils.flexbox} ${classes.subSettings}`}>
          <ToggleButtons title="12-hour time" />
          <ToggleButtons title="dark mode" />
          <ToggleButtons title="location" subText="Weather of your location" />
          <ToggleButtons title="Language" noBtn lang />
          <ToggleButtons title="Help" noBtn />
          {currentUser && <ToggleButtons title="Logout" noBtn />}
        </div>
      </div>
    </div>
  );
}
