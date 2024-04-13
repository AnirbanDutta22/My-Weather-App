import { useState } from "react";
import classes from "../../styles/settingsStyle/settings.module.css";
import { MainButton } from "../styled/MainBtn.styled";

export default function Options(props) {
  const [btn, btnClicked] = useState(null);

  const handleCheck = (e) => {
    btnClicked(e.target.innerHTML);
  };

  return (
    <div>
      <span>{props.category}</span>
      <div className={classes.settingsBtns}>
        {props.title.map((items) => (
          <>
            <MainButton
              box_shadow="none"
              hover_box_shadow="none"
              transform="none"
              btnBg={btn === items ? "var(--main_color)" : "var(--main_color3)"}
              color="#fff"
              brad="20px"
              padd="10px"
              margin="0 10px 0px 0"
              type="button"
              onClick={handleCheck}
            >
              {items}
            </MainButton>
          </>
        ))}
      </div>
    </div>
  );
}
