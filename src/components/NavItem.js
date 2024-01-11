import MaterialIcon from "material-icons-react";
import { NavLink } from "react-router-dom";
import classes from "../styles/leftbar.module.css";

export default function NavItem(props) {
  return (
    <>
      <div className={classes.subLeftBox}>
        <NavLink
          to={`/WeatherPage/${props.pageURL}`}
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
        >
          {({ isActive }) => {
            return isActive ? (
              <>
                <MaterialIcon
                  icon={props.iconName}
                  size="medium"
                  color="#757575"
                />
                <br />
                <span>{props.title}</span>
              </>
            ) : (
              <>
                <MaterialIcon
                  icon={props.iconName}
                  size="medium"
                  color="#000000"
                />
                <br />
                <span>{props.title}</span>
              </>
            );
          }}
        </NavLink>
      </div>
    </>
  );
}
