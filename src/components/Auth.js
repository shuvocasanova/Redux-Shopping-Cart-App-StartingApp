import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    //Dispatch actions onSubmit
    dispatch(authActions.login())
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="Just press Login button"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Just press Login button"
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
