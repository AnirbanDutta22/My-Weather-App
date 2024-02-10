import welcomeIcon from "../assets/images/welcomeImage4.png";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/leftbar.module.css";
import utils from "../styles/utilities.module.css";
import NavItem from "./NavItem";
import { Logo } from "./styled/Logo.styled";

export default function LeftBar() {
  const { currentUser } = useAuth();

  return (
    <div className={`${classes.leftBox} ${utils.flexbox}`}>
      <div className={classes.subLeftBox1}>
        <Logo to={currentUser ? "/dashboard" : "/"}>
          <img src={welcomeIcon} alt="welcome" />
        </Logo>
        <NavItem pageURL="weather" iconName="cloud" />
        <NavItem pageURL="cities" iconName="list" />
        <NavItem pageURL="map" iconName="location-dot" />
        <NavItem pageURL="settings" iconName="gear" />
      </div>
      <div className={classes.subLeftBox2}>
        {currentUser ? (
          <NavItem pageURL="../dashboard/notifications" iconName="bell" />
        ) : null}
        {currentUser ? (
          <NavItem
            pageURL="../user/settings"
            iconName="user"
            title={currentUser.displayName}
          />
        ) : (
          <NavItem pageURL="../signin" iconName="user" title="you" />
        )}
      </div>
    </div>
  );
}
