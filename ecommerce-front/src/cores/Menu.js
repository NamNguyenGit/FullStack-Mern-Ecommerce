import { Link, withRouter } from "react-router-dom";
import { signOut, isAuthenticated } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => {
  return (
    <>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard">
            Dashboard
          </Link>
        </li>
        ) }
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/admin/dashboard")} to="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        ) }

        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signIn")}
                to="/signIn"
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signUp")}
                to="/signUp"
              >
                Sign Up
              </Link>
            </li>
          </>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: "pointer", color: "#ffffff" }}
              onClick={() =>
                signOut(() => {
                  history.push("/");
                })
              }
            >
              Sign Out
            </span>
          </li>
        )}
      </ul>
    </>
  );
};

export default withRouter(Menu);
