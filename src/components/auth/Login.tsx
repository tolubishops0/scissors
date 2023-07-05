import styles from "../../auth.module.css";
import scissors from "../../assets/scissors.png";
import { Link } from "react-router-dom";

import google from "../../assets/google.png";

type Props = {};

function Login({}: Props) {
  return (
    <aside className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={scissors} alt="scisors" width="400px" />
      </div>
      <div className={styles.form}>
        <h1>Log In</h1>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="password" required />
          <button className="--btn --btn-primary --btn-block">Submit</button>
          <div className={`font-semibold ${styles.links}`}>
            <Link to="/reset"> Reset Password</Link>
          </div>
          <p>-- OR --</p>
        </form>
        <button className="--btn --btn-danger --btn-block">
          <img src={google} width="7%" className="mr-2 mt-[1.2%]" />
          Login with google
        </button>{" "}
        <span className={`font-semibold ${styles.register}`}>
          <p className="mr-1 font-normal">Don't have an account? </p>
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </aside>
  );
}

export default Login;
