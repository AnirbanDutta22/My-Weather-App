import signImg from "../../assets/images/signImg.png";
import classes from "../../styles/useraccount/signup.module.css";
import SignUpForm from "../SignUpForm";

export default function SignUp() {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <SignUpForm />
        <div className={classes.imgClass}>
          <img src={signImg} alt="" />
        </div>
      </div>
    </div>
  );
}
