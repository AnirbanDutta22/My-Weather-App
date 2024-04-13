import signImg from "../assets/images/signImg3.png";
import SignUpForm from "../components/Sign Section/SignUpForm";
import classes from "../styles/useraccount/signup.module.css";

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
