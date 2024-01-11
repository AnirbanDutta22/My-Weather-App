import classes from "../styles/home.module.css";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <div className={`${classes.bgClass} ${classes.height} ${classes.flex}`}>
      <Welcome />
    </div>
  );
}
