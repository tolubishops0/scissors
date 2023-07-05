import { useState } from "react";

import styles from "../../auth.module.css";
import scissors from "../../assets/scissors.png";
import { Link } from "react-router-dom";

type Props = {};

function SignUp({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
  };

  return (
    <aside className={`container ${styles.auth}`}>
      <div className={styles.form}>
        <h1>Sign Up</h1>
        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="--btn --btn-primary --btn-block">
            Submit
          </button>
        </form>

        <span className={`font-semibold ${styles.register}`}>
          <p className="mr-1 font-normal">Already have an account? </p>
          <Link to="/login">Log In</Link>
        </span>
      </div>
      <div className={styles.img}>
        <img src={scissors} alt="scisors" width="400px" />
      </div>
    </aside>
  );
}

export default SignUp;
