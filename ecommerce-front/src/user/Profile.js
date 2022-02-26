import Layout from "../cores/Layout";
import { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { read, update, updateUser } from "./apiUser";
import { Redirect } from "react-router-dom";

const Profile = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  const { token } = isAuthenticated();

  const { name, email, password, error, success } = values;

  const init = (userId) => {
    read(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: false });
      } else {
        setValues({ ...values, name: data.name, email: data.email });
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    update(match.params.userId, token, {name, email, password}).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            name: data.name,
            email: data.email,
            success: true,
          });
        });
      }
    });
  };

  const redirectUser = (success) => {
    if(success) {
      return <Redirect to="/user/dashboard"></Redirect>
    }
  }

  const profileUpdate = (name, email, password) => {
    return (
      <>
        <form>
          <div className="from-group">
            <label className="text-muted">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="from-group">
            <label className="text-muted">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="from-group">
            <label className="text-muted">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handleChange("password")}
            />
          </div>
          <button className="btn btn-primary" onClick={clickSubmit}>
            Submit
          </button>
        </form>
        
      </>
    );
  };
  return (
    <>
      <Layout
        title="Profile"
        description="Update your profile"
        className="container-fluid"
      >
        <div className="row">
          <h2 className="mb-4">Profile Update</h2>
        </div>
        {profileUpdate(name, email, password)}
        {redirectUser(success)}
      </Layout>
    </>
  );
};

export default Profile;
