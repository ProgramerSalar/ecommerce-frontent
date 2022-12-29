import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "../../firebase";
import { Button } from "antd";

import { MailOutlined } from "@ant-design/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(email, password);
  };

  const LoginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="from-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="your password"
        />
      </div>

      <br />
      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Emai/Password
      </Button>
    </form>
  );

  return (
    <div>
      <div className="container p-5">
        <div className="row-auto">
          <div className="col-md "></div>
          <h4 className="">Login</h4>
          <ToastContainer />
          {LoginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
