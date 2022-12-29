import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "../../firebase";
import { Button } from "antd";

import { MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const Login = ({ history }) => {
  const [email, setEmail] = useState("manishkumar60708090@gmail.com");
  const [password, setpassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table(email, password);
    setLoading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      // console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
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
