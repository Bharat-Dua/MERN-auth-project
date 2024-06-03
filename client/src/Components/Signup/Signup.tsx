import React, { useState, ChangeEvent } from "react";

import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../Utils/RegEx";
import toast from "react-hot-toast";
const Signup = () => {
  const [userDetails, setUserDetail] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    // console.log(name, value);
    setUserDetail((prev) => ({ ...prev, [name]: value }));
    // console.log(userDetails)
  }

  const handleSignUp = () => {
    if (!userDetails.username) {
      toast.error("Please enter a valid username");
    }

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

    console.log(userDetails);
    console.log(emailRegex.test(userDetails.email), userDetails.email);
    console.log(passwordRegex.test(userDetails.password), userDetails.password);
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Sign up...</h2>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={userDetails.username}
            onChange={handleInputChange}
            name="username"
            placeholder="Enter your name..."
          />
          <input
            type="email"
            value={userDetails.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Enter your email..."
          />
          <input
            type="password"
            value={userDetails.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Enter your password..."
          />
          <button onClick={handleSignUp}>Sign up</button>
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
