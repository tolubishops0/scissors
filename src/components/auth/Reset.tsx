import React from "react";

import styles from "../../auth.module.css";
import scissors from "../../assets/scissors.png";
import { Link } from "react-router-dom";

type Props = {};

function Reset({}: Props) {
  return (
    <aside className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={scissors} alt="scisors" width="400px" />
      </div>
      <div className={styles.form}>
        <h1>Reset Password</h1>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="password" required />
          <button className="--btn --btn-primary --btn-block">Submit</button>
          <div className={`font-semibold ${styles.links}`}>
            <p>
              <Link to="/login"> - Log In</Link>{" "}
            </p>
            <p>
              <Link to="/register"> - Register </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </aside>
  );
}

export default Reset;
