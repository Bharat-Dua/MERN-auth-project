import React from "react";

import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Sign up...</h2>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Enter your name..." />
          <input type="email" placeholder="Enter your email..." />
          <input type="password" placeholder="Enter your password..." />
          <button>Sign up</button>
        </div>
        <span>
          Already have an account?
          <Link to={"/"}> Login </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
