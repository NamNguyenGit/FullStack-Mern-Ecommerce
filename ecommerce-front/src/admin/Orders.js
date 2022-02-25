import { useState, useEffect } from "react";
import Layout from "../cores/Layout";
import { listOrders, getStatusValue } from "./apiAdmin";
import { isAuthenticated } from "../auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState([]);
  const { user, token } = isAuthenticated();

  const loadOrders = () => {
    listOrders(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  const loadStatusValues = () => {
    getStatusValue(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStatus(data);
      }
    });
  };

  useEffect(() => {
    loadOrders();
    loadStatusValues();
  }, []);

  const showOrdersLength = () => {
    if (orders.length > 0) {
      return (
        <h1 className="text-danger display-2">Total orders: {orders.length}</h1>
      );
    } else {
      return <h1 className="text-danger ">No orders</h1>;
    }
  };

  const showInput = (key, value) => (
    <div className="input-group mb-2 mr-2 mr-sm-2">
      <div className="input-group-prepend">
        <div className="input-group-text">{key}</div>
      </div>
      <input type="text" value={value} className="form-control" readOnly />
    </div>
  );

  const handleStatusChange = (e,orderId) => {
    console.log("ss")
  }

  const showStatus = (order) => (
    <div className="form-group">
      <h3 className="mark mb-4"> Status: {order.status}</h3>
      <select
        className="form-control"
        onChange={(e) => handleStatusChange(e, order._id)}
      >
        <option>Update Status</option>
        {status.map((s, i) => (
          <option key={i} value={s}>
            {s}{" "}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <>
      <Layout
        title="Orders"
        description="Manage all orders here"
        className="container-fluid"
      >
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {showOrdersLength()}
            {orders.map((order, i) => {
              return (
                <div
                  style={{ borderBottom: "5px solid indigo" }}
                  className="mt-5"
                  key={i}
                >
                  <h2 className="mb-5">
                    <span className="bg-primary">Order ID : {order._id}</span>
                  </h2>
                  <ul className="list-group mb-2">
                    <li className="list-group-item">{showStatus(order)}</li>
                    <li className="list-group-item">
                      Transaction ID :{order.transaction_id}
                    </li>
                    <li className="list-group-item">
                      Amount: <span>$</span>
                      {order.amount}
                    </li>
                    <li className="list-group-item">
                      Order By: {order.user.name}
                    </li>
                    <li className="list-group-item">
                      Order on : {moment(order.createdAt).fromNow()}
                    </li>
                    <li className="list-group-item">
                      Delivery Address: {order.address}
                    </li>
                  </ul>
                  <h3 className="mt-4 mb-4 font-italic">
                    Total products: {order.products.length}
                  </h3>
                  {order.products.map((product, i) => (
                    <div
                      key={i}
                      className="mb-4"
                      style={{ padding: "20px", border: "1px solid indigo" }}
                    >
                      {showInput("Product name", product.name)}
                      {showInput("Product price", product.price)}
                      {showInput("Product total", product.count)}
                      {showInput("Product Id", product._id)}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Orders;
