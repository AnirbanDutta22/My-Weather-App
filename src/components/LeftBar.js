import { getAuth } from "firebase/auth";
import MaterialIcon from "material-icons-react";
import { NavLink } from "react-router-dom";
import welcomeIcon from "../assets/images/welcomeImage.png";
import classes from "../styles/leftbar.module.css";
import utils from "../styles/utilities.module.css";
import NavItem from "./NavItem";

export default function LeftBar() {
  const { currentUser } = getAuth();

  return (
    <div className={`${classes.leftBox} ${utils.flexbox}`}>
      <div className={classes.subLeftBox}>
        <NavLink to={currentUser ? "/Dashboard" : "/"}>
          <img src={welcomeIcon} alt="welcome" />
        </NavLink>
      </div>
      <NavItem pageURL="Weather" iconName="cloud" title="weather" />
      <NavItem pageURL="Cities" iconName="list" title="cities" />
      <NavItem pageURL="Map" iconName="location_on" title="map" />
      <NavItem pageURL="Settings" iconName="tune" title="settings" />
      <div className={classes.subLeftBox}>
        {currentUser ? (
          <>
            <NavLink to="/Dashboard">
              <MaterialIcon icon="account_circle" size="medium" />
              <br />
              <span>{currentUser.displayName}</span>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/SignUp">
              <MaterialIcon icon="account_circle" size="medium" />
              <br />
              <span>You</span>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
