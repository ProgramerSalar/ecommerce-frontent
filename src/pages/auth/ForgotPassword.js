import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.prevenDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("check your email for password reset Link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("ERROR msg in forgot password", error);
      });
  };

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      {loading ? (
        <h4 className="text-danger">Loading</h4>
      ) : (
        <h4>Forgot Passowrd</h4>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
          autoFocus
        ></input>
        <br />
        <button
          className="btn btn-raised hover:bg-blue-500 hover:text-lg hover:text-black"
          disabled={!email}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
