import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState(" ");

  const handleSubmit = () => {};

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />

      <button type="submit" className="btn btn-raised">
        Register / {email}
      </button>
    </form>
  );

  return (
    <div>
      <div className="container p-5">
        <div className="row-auto">
          <div className="col-md "></div>
          <h4 className="">Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
