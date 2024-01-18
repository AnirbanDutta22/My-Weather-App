import classes from "../../styles/settingsStyle/settings.module.css";
import { Input, Label, Switch } from "../styled/ToggleBtn.styled";

export default function ToggleOption(props) {
  return (
    <div className={classes.container}>
      <span>{props.title}</span>
      <div>
        <Label>
          <Input type="checkbox" />
          <Switch />
        </Label>
      </div>
    </div>
  );
}
