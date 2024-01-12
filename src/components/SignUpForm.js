import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MainBtn from "./MainBtn";
import { SignContainer, SignInputs } from "./styled/Form.styled";

export default function SignUpForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (pass !== confirmPass) {
      return setError("Passwords don't match");
    }

    try {
      setIsLoading(true);
      setError("");
      await signup(email, pass, username);
      setUserName("");
      setEmail("");
      setPass("");
      setConfirmPass("");
      navigate("/WeatherPage/Weather");
    } catch (error) {
      console.log(error);
      setUserName("");
      setEmail("");
      setPass("");
      setConfirmPass("");
      setIsLoading(false);
      setError("Failed to create account");
    }
  }

  return (
    <SignContainer onSubmit={handleSubmit}>
      <SignInputs>
        <span>Sign up</span>
      </SignInputs>
      <SignInputs>
        <input
          type="text"
          placeholder="username"
          required
          value={username}
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
      </SignInputs>
      <SignInputs>
        <input
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </SignInputs>
      <SignInputs>
        <input
          type="password"
          placeholder="password"
          required
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
        />
      </SignInputs>
      <SignInputs>
        <input
          type="password"
          placeholder="confirm password"
          required
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.currentTarget.value)}
        />
      </SignInputs>
      <SignInputs>
        <MainBtn
          text="Sign Up"
          brad="20px"
          box_shadow="none"
          padd="16px 25px"
          transform="none"
          hover_box_shadow="none"
          disabled={isLoading}
          type="submit"
        />
      </SignInputs>
      {error ? (
        <>
          <p>{error}</p>
        </>
      ) : (
        ""
      )}
      <SignInputs>
        <span>Already have an account ? </span>
        <Link to="/SignIn">
          <span>Sign in</span>
        </Link>
      </SignInputs>
    </SignContainer>
  );
}
