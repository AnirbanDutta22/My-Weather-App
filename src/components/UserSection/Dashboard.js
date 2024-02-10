import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const { signout } = useAuth();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      setError("");
      setIsLoading(true);
      await signout();
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("Failed to logout");
    }
  }
  return (
    <>
      <h1>Welcome to dashboard, {currentUser.displayName}</h1>
      <button onClick={handleLogOut}>Logout</button>
      {error ? (
        <>
          <p>{error}</p>
        </>
      ) : (
        ""
      )}
    </>
  );
}
