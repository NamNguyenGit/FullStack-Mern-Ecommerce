import Layout from "../cores/Layout";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { signIn, authenticate } from "../auth";

const SignIn = () => {
  const [state, setState] = useState({
    email: "nam@gmail.com",
    password: "namdeptrai2001",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = state;

  const clickSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, error: false, loading: true });
    signIn({ email, password }).then((data) => {
      if (data.error) {
        setState({
          ...state,
          error: data.error,
          loading: false,
        });
      } else {
        authenticate(data, () => {
          setState({
            ...state,
            redirectToReferrer: true,
          });
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

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading ...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      <Layout
        title="Sign in"
        description="Sign in Node React E-commerce App"
        className="container col-md-8 offset-md-2"
      >
        {showError()}
        {showLoading()}
        {redirectUser()}
        {signUpForm()}
      </Layout>
    </>
  );
};

export default SignIn;
