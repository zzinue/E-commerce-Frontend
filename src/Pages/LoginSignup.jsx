import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsingup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="Email Adress" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account ?<span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
