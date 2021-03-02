import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

function Logout(props) {
  const { onAuthFail } = props;
  useEffect(() => {
    onAuthFail();
  }, [onAuthFail]);
  return <Redirect to="/login" />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthFail: () => dispatch(actions.authLoginFail()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
