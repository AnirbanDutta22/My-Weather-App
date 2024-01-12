import { Link } from "react-router-dom";
import logo from "../assets/images/welcomeImage.png";
import { useAuth } from "../contexts/AuthContext";
import ids from "../styles/welcome.module.css";
import MainBtn from "./MainBtn";

export default function Welcome() {
  const { currentUser } = useAuth();

  return (
    <>
      <div id={ids.welcomeIcon}>
        <img src={logo} alt="logo" />
      </div>
      <div id={ids.appTitle}>
        <span>My </span>
        <span>Weather </span>
        <span>App</span>
        <p>Lorem ipsum dolor sit, adipisicing elit. Repellat, nobis?</p>
      </div>
      <MainBtn url="/WeatherPage/Weather" text="Get Started" brad="4vw" />
      {currentUser ? (
        ""
      ) : (
        <>
          <div id={ids.account}>
            <span>
              <Link to="/SignIn">Sign In</Link>
            </span>
            |
            <span>
              <Link to="/SignUp">Create an account</Link>
            </span>
          </div>
        </>
      )}
    </>
  );
}
