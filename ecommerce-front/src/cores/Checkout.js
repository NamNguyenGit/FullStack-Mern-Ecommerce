import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

const Checkout = ({ products }) => {
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const showCheckout = () => {
    return (
      <>
        {isAuthenticated() ? (
          <button className="btn btn-success"> Checkout</button>
        ) : (
          <Link to="/signIn">
            <button className="btn btn-primary"> Sign in to checkout</button>
          </Link>
        )}
      </>
    );
  };
  return (
    <>
      <h2>
        Total: <span>$</span>
        {getTotal()}
      </h2>
      {showCheckout()}
    </>
  );
};

export default Checkout;
