import { Link } from "react-router-dom";
import logo from "../assets/images/welcomeImage4.png";
import { useAuth } from "../contexts/AuthContext";
import ids from "../styles/welcome.module.css";
import MainBtn from "./MainBtn";

export default function Welcome() {
  const { currentUser } = useAuth();

  return (
    <div className={`${ids.bgClass} ${ids.height} ${ids.flex}`}>
      <div id={ids.welcomeIcon}>
        <img src={logo} alt="logo" />
      </div>
      <div id={ids.appTitle}>
        <span>My </span>
        <span>Weather </span>
        <span>App</span>
        <p>Lorem ipsum dolor sit, adipisicing elit. Repellat, nobis?</p>
      </div>
      <MainBtn url="/weatherpage/weather" text="Get Started" brad="4vw" />
      {currentUser ? (
        ""
      ) : (
        <>
          <div id={ids.account}>
            <span>
              <Link to="/signin">Sign In</Link>
            </span>
            |
            <span>
              <Link to="/signup">Create an account</Link>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
