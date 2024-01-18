import classes from "../../styles/settingsStyle/settings.module.css";
import { MainButton } from "../styled/MainBtn.styled";

export default function Options(props) {
  return (
    <div>
      <span>{props.category}</span>
      <div className={classes.settingsBtns}>
        {props.title.map((items) => (
          <>
            <MainButton
              box_shadow="none"
              hover_box_shadow="none"
              btnBg="var(--main_color3)"
              transform="none"
              color="#fff"
              type="checkbox"
            >
              {items}
            </MainButton>
          </>
        ))}
      </div>
    </div>
  );
}
