import Layout from "../cores/Layout";
import { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { read, update, updateUser } from "./apiUser";

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
        {JSON.stringify(values)}
      </Layout>
    </>
  );
};

export default Profile;
