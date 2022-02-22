import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./user/Signin";
import SignUp from "./user/Signup";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/signUp" exact component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Routes;
