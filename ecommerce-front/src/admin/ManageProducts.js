import { useState, useEffect } from "react";
import Layout from "../cores/Layout";
import { isAuthenticated } from "../auth";
import { getProducts, deleteProduct } from "./apiAdmin";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(productId,user._id, token);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Layout
        title="Manage Product"
        description="CRUD Products"
        className="container-fluid"
      >
        <div className="row">
          <h1>Manage Product</h1>
          <div className="col-12">
            <h2 className="text-center"> Total {products.length} products </h2>
            <hr />
            <ul className="list-group">
              {products.map((product, i) => (
                <li
                  key={i}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <strong>{product.name}</strong>
                  <Link to={`/admin/product/update/${product._id}`}>
                    <span className="badge badge-warning badge-pill">
                      Update
                    </span>
                  </Link>
                  <span
                    onClick={() => destroy(product._id)}
                    className="badge badge-danger badge-pill"
                  >
                    Delete
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ManageProducts;
