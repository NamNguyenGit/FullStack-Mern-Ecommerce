import Layout from "../cores/Layout";
import { useState } from "react";

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleChange = (name) => (event) => {
    setState({
      ...state,
      error: false,
      [name]: event.target.value,
    });
  };
  const signUpForm = () => {
    return (
      <form>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            onChange={handleChange("email")}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Password</label>
          <input
            onChange={handleChange("password")}
            type="password"
            className="form-control"
          />
        </div>
        <button className="btn-primary">Submit</button>
      </form>
    );
  };

  return (
    <>
      <Layout
        title="Sign up"
        description="Sign up Node React E-commerce App"
        className="container col-md-8 offset-md-2"
      >
        {signUpForm()}
        {JSON.stringify(state)}
      </Layout>
    </>
  );
};

export default SignUp;
