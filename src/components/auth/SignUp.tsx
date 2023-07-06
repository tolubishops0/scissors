import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

//import all these
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

//import toastify
import { toast } from "react-toastify";

import styles from "../../auth.module.css";
import scissors from "../../assets/scissors.png";

import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

type Props = {};

function SignUp({}: Props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signupUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("passwords do not match");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setIsLoading(false);
        toast.success("Signed Up Successfully!");
        navigate("/login");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <aside className={`container ${styles.auth}`}>
        <div className={styles.form}>
          <h1>Sign Up</h1>

          <form onSubmit={signupUser}>
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
              Sign Up
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
    </>
  );
}

export default SignUp;
