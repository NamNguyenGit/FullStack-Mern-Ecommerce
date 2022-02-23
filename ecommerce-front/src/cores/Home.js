import Layout from "./Layout";
import getProducts from "./apiCore";
import { useState, useEffect } from "react";
import Card from "./Card";

const Home = () => {
  const [productBySell, setProductBySell] = useState([]);
  const [productByArrival, setProductByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductByArrival(data);
      }
    });
  };
  const loadProductsBySold = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductBySell(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySold();
  }, []);

  return (
    <>
      <Layout title="Home Page" description="Node React E-commerce App" className="container-fluid">
        <h2 className="mb-4">Best Sellers</h2>
        <div className="row">
          {productBySell.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </div>

        <h2 className="mb-4">New Arrivals</h2>
        <div className="row">
          {productByArrival.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
