import { useState, useEffect } from "react";
import Card from "./Card";
import { getCart } from "./cartHelps";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = (items) => {
    return (
      <>
        <div>
          <h2>Your cart has {`${items.length}`} items </h2>
          <hr />
          {items.map((product, i) => (
            <Card key={i} product={product} showAddToCartButtons={false} cartUpdate={true} />
          ))}
        </div>
      </>
    );
  };

  const noItemsMessages = () => {
    return (
      <>
        <h2>
          Your cart is empty. <br /> <Link to="/shop">Continue Shopping</Link>
        </h2>
      </>
    );
  };

  return (
    <>
      <Layout
        title="Shopping Cart"
        description="Manage your cart items"
        className="container-fluid"
      >
        <div className="row">
          <div className="col-6">
            {items.length > 0 ? showItems(items) : noItemsMessages()}
          </div>
          <div className="col-6">
            <p>show checkout options</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
