import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MainBtn from "./MainBtn";
import { SignContainer, SignInputs } from "./styled/Form.styled";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  const { signin } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");
      await signin(email, pass);
      setEmail("");
      setPass("");
      navigate("/weatherPage/weather");
    } catch (error) {
      console.log(error);
      setEmail("");
      setPass("");
      setIsLoading(false);
      setError("Failed to login");
    }
  }
  return (
    <SignContainer onSubmit={handleSubmit}>
      <SignInputs>
        <span>Sign in</span>
      </SignInputs>
      <SignInputs>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </SignInputs>
      <SignInputs>
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
        />
      </SignInputs>
      <SignInputs>
        <MainBtn
          text="Sign in"
          brad="20px"
          box_shadow="none"
          padd="16px 25px"
          transform="none"
          hover_box_shadow="none"
          width="100%"
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
        <span>Account not created yet ? </span>
        <Link to="/signup">
          <span>Sign up</span>
        </Link>
      </SignInputs>
    </SignContainer>
  );
}
