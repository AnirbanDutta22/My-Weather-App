import classes from "../../styles/settingsStyle/settings.module.css";
import { Input, Label, Switch } from "../styled/ToggleBtn.styled";

export default function ToggleButtons(props) {
  return (
    <div className={classes.container}>
      <span>
        {props.title}
        <p>{props.subText}</p>
      </span>
      <div>
        {!props.noBtn && (
          <Label>
            <Input type="checkbox" />
            <Switch />
          </Label>
        )}
        {props.lang && (
          <select>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        )}
      </div>
    </div>
  );
}
