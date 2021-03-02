import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const login = localStorage.getItem("login");

  return (
    <Route
      {...rest}
      component={(props) =>
        !!login ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
