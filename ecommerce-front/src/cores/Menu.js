import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({history}) => {
  return (
    <>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history,'/')} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history,'/signIn')} to="/signIn">
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history,'/signUp')} to="/signUp">
            Sign Up
          </Link>
        </li>
      </ul>
    </>
  );
};

export default withRouter(Menu);
