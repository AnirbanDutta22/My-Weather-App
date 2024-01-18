import { NavLink } from "react-router-dom";
import classes from "../styles/leftbar.module.css";

export default function NavItem(props) {
  return (
    <>
      <div className={classes.navitems}>
        <NavLink
          to={`/weatherpage/${props.pageURL}`}
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
        >
          {({ isActive }) => {
            return isActive ? (
              <>
                <i className={`fa-solid fa-${props.iconName}`}></i>
                <br />
                <span>{props.title}</span>
              </>
            ) : (
              <>
                <i className={`fa-solid fa-${props.iconName}`}></i>
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
