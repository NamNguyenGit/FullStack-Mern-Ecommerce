import Layout from "../cores/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signup } from "../auth";

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = state;

  const clickSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setState({
          ...state,
          error: data.error,
          success: false,
        });
      } else {
        setState({
          ...state,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

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
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            value={email}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Password</label>
          <input
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            value={password}
          />
        </div>
        <button onClick={clickSubmit} className="btn-primary">
          Submit
        </button>
      </form>
    );
  };

  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const showSuccess = () => {
    return (
      <div
        className="alert alert-info"
        style={{ display: success ? "" : "none" }}
      >
        Sign Up Successful . Please <Link to="/signIn">Sign in</Link>
      </div>
    );
  };

  return (
    <>
      <Layout
        title="Sign up"
        description="Sign up Node React E-commerce App"
        className="container col-md-8 offset-md-2"
      >
        {showError()}
        {showSuccess()}
        {signUpForm()}
      </Layout>
    </>
  );
};

export default SignUp;
