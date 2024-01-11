import { Link } from "react-router-dom";
import ids from "../styles/mainBtn.module.css";

export default function MainBtn() {
  return (
    <>
      <div id={ids.startBtn}>
        <Link to="/WeatherPage/Weather" className={ids.linkColor}>
          Get Started
        </Link>
      </div>
    </>
  );
}
