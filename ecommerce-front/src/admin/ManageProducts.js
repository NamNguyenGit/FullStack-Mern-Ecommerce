import { useState } from "react";
import Layout from "../cores/Layout";
import { isAuthenticated } from "../auth";

const ManageProducts = () => {
  return (
    <>
      <Layout
        title="Manage Product"
        description="CRUD Products"
        className="container-fluid"
      >
        <div className="row">
          <h1>Manage Product</h1>
        </div>
      </Layout>
    </>
  );
};

export default ManageProducts;
