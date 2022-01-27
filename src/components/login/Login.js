import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Login.css";

const Login = ({ setScreenIndex }) => {
  const userList = useSelector((state) => state.signup.records);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const [error, setError] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    if (
      userList.some(
        (record) => record.email === email && record.password === password
      )
    ) {
      setScreenIndex(3);
    } else {
      setError("Email or Password Wrong");
    }
  };

  return (
    <form className="form">
      <div className="form-inner">
        <h2>LOGIN</h2>
        <h5>Please enter your email and password !</h5>

        <input
          placeholder="    Enter Email"
          type="email"
          name="email"
          id="email"
          value={email}
          onInput={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          placeholder="    Enter Password"
          type="password"
          name="password"
          id="password"
          value={password}
          onInput={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p className={"erro-text"}>{error}</p>
        <button id="login" className="btn" onClick={loginHandler}>
          LOGIN
        </button>

        <h5 className="hvnt">Haven't an Account?</h5>

        <button
          id="signup"
          onClick={() => {
            setScreenIndex(2);
          }}
          className="btn"
          type="submit"
        >
          SIGNUP
        </button>
      </div>
    </form>
  );
};

export default Login;
