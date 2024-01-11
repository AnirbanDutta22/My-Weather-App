import logo from "../assets/images/welcomeImage.png";
import ids from "../styles/welcome.module.css";
import MainBtn from "./MainBtn";

export default function Welcome() {
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
      <MainBtn />
      <div id={ids.account}>
        <span>Sign In</span>|<span>Create an account</span>
      </div>
    </>
  );
}
