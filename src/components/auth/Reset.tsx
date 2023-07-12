import React, { useState } from "react";

import styles from "../../auth.module.css";
import scissors from "../../assets/scissors.png";

import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";

import { toast } from "react-toastify";
import Loader from "../loader/Loader";

type Props = {};

function Reset({}: Props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setIsLoading(false);
        toast.success("check email for your password");
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <aside className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={scissors} alt="scisors" width="400px" />
        </div>
        <div className={styles.form}>
          <h1>Reset Password</h1>
          <form onSubmit={resetPassword}>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Submit
            </button>
            <div className={`font-semibold ${styles.links}`}>
              <p>
                <Link to="/login"> - Log In</Link>{" "}
              </p>
              <p>
                <Link to="/signup"> - Sign Up </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
}

export default Reset;
