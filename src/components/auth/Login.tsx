import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/config";

import { toast } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import styles from "../../auth.module.css";
import scissors from "../../assets/scissors.png";
import { Link } from "react-router-dom";

import google from "../../assets/google.png";
import Loader from "../loader/Loader";

type Props = {};

function Login({}: Props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //regular login
  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("sign in successfully");
        navigate("/urlpage");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };
  //login with google
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        toast.success("Login successful");
        navigate('/urlpage')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {/* <ToastContainer /> */}
      {isLoading && <Loader />}

      <aside className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={scissors} alt="scisors" width="400px" />
        </div>
        <div className={styles.form}>
          <h1>Log In</h1>
          <form onSubmit={loginUser}>
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
            <button type="submit" className="--btn --btn-primary --btn-block">
              Submit
            </button>
            <div className={`font-semibold ${styles.links}`}>
              <Link to="/reset"> Reset Password</Link>
            </div>
            <p>-- OR --</p>
          </form>
          <button
            className="--btn --btn-danger --btn-block"
            onClick={signInWithGoogle}>
            <img src={google} width="7%" className="mr-2 mt-[1.2%]" />
            Login with google
          </button>{" "}
          <span className={`font-semibold ${styles.register}`}>
            <p className="mr-1 font-normal">Don't have an account? </p>
            <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </aside>
    </>
  );
}

export default Login;
