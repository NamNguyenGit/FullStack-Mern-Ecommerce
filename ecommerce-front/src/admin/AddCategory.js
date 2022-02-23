import Layout from "../cores/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //destructure user and token from local storage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request api to create
  };

  const newCategoryForm = () => {
    return (
      <>
        <form onSubmit={clickSubmit}>
          <div className="form-group">
            <label className="text-muted">Name</label>
            <input
              type="text"
              className="form-control"
              autoFocus
              value={name}
              onChange={handleChange}
            />
          </div>
          <button className="btn-outline-primary">Create Category</button>
        </form>
        
      </>
    );
  };

  return (
    <>
      <Layout
        title="Add New Category"
        description="Ready To Add A New Category"
      >
        <div className="row">
          <div className="col-md-8 offset-md-2">{newCategoryForm()}</div>
        </div>
      </Layout>
    </>
  );
};

export default AddCategory;
