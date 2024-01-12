import { Link } from "react-router-dom";
// import ids from "../styles/mainBtn.module.css";
import { MainButton } from "./styled/MainBtn.styled";

export default function MainBtn(props) {
  return (
    <>
      <MainButton
        brad={props.brad}
        box_shadow={props.box_shadow}
        hover_box_shadow={props.hover_box_shadow}
        padd={props.padd}
        transform={props.transform}
        type="submit"
      >
        <Link to={props.url} className="linkColor">
          {props.text}
        </Link>
      </MainButton>
    </>
  );
}
