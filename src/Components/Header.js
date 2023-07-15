import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="">
      {isAuthenticated ? (
        <div>
          <Link to="/employee">
            <button className="bg-green-300 m-12 rounded-3xl p-3">
              Employees Details
            </button>
          </Link>
          <Link to="/job">
            <button className="bg-green-300 m-12 rounded-3xl p-3">
              Job Details
            </button>
          </Link>
          <button
            className="bg-green-300 m-1 rounded-3xl p-3 float-right"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }>
            Log Out
          </button>
        </div>
      ) : (
        <button
          className="bg-green-300 m-1 rounded-3xl p-3 float-right "
          onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Header;
