import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./user/Signin";
import SignUp from "./user/Signup";
import Home from "./cores/Home";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import AdminRoute from "./auth/AdminRoute";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./cores/Shop";
import Products from "./cores/Product";
import Cart from "./cores/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProducts from "./admin/UpdateProducts";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/" exact component={Home} />
        <Route path="/product/:productId" exact component={Products} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/signUp" exact component={SignUp} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProducts} />
      </Switch>
    </Router>
  );
};

export default Routes;
