import React, { useState, ChangeEvent } from "react";

import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../Utils/RegEx";
import toast from "react-hot-toast";
const Login = () => {
  const [userDetails, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    // console.log(name, value);
    setUserDetail((prev) => ({ ...prev, [name]: value }));
    // console.log(userDetails)
  }

  const handleLogin = () => {
    if (!emailRegex.test(userDetails.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(userDetails.password)) {
      toast.error(
        "Password must be at least 8 characters long and must include at least one special character and number"
      );
      return;
    }

    toast.success("Form Submitted");
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Login...</h2>
        <div className={styles.social}>
          <div>FB</div>
          <div>Google</div>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="email"
            value={userDetails.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Enter your email..."
          />
          <div className={styles.passwordContainer}>
            <input
              type={show ? "text" : "password"}
              value={userDetails.password}
              onChange={handleInputChange}
              name="password"
              placeholder="Enter your password..."
            />
            <button onClick={togglePasswordVisibility}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className={styles.footer}>
          <span>
            Don't have an account?
            <Link to={"/signup"}> Signup </Link>
          </span>
          <Link to={"/forget-password"}> forget password </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
