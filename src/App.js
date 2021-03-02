import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Auxilary from "./hoc/Auxilary/Auxilary";
import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";
import LayoutComponent from "./hoc/Layout/Layout";
import LoginPage from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Bank from "./pages/bank";
import BankCreatePage from "./pages/bankCreate";
import Receipt from "./pages/receipt";
import ReceiptCreate from "./pages/receiptCreate";
import Taxes from "./pages/taxes";
import TaxeCreate from "./pages/taxeCreate";
import Info from "./pages/info";
import Logout from "./pages/logout";
import Profile from "./pages/profile";
import Notification from "./pages/notification";
import Dashboard from "./pages/dashboard";

import PrivateRoute from "./PrivateRoute";

function App(props) {
  const { onAuthCheck } = props;
  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);
  return (
    <Auxilary>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route>
            <LayoutComponent>
              <Switch>
                <PrivateRoute path="/" exact component={Home} />
                <PrivateRoute path="/receipt" exact component={Receipt} />
                <PrivateRoute
                  path="/receipt/create"
                  component={ReceiptCreate}
                />
                <PrivateRoute path="/taxes" exact component={Taxes} />
                <PrivateRoute path="/taxes/create" component={TaxeCreate} />
                <PrivateRoute path="/info" exact component={Info} />
                <PrivateRoute path="/logout" component={Logout} />
                <PrivateRoute path="/accounts" exact component={Bank} />
                <PrivateRoute
                  path="/accounts/create"
                  component={BankCreatePage}
                />
                <PrivateRoute path="/profile" exact component={Profile} />
                <PrivateRoute
                  path="/notifications"
                  exact
                  component={Notification}
                />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
              </Switch>
            </LayoutComponent>
          </Route>
        </Switch>
      </Router>
    </Auxilary>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheck: () => dispatch(actions.authLoginCheck()),
  };
};

export default connect(null, mapDispatchToProps)(App);
