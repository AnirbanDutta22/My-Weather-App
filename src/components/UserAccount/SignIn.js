import signImg from "../../assets/images/signImg3.png";
import classes from "../../styles/useraccount/signup.module.css";
import SignInForm from "../SignInForm";

export default function SignUp() {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <SignInForm />
        <div className={classes.imgClass}>
          <img src={signImg} alt="" />
        </div>
      </div>
    </div>
  );
}
