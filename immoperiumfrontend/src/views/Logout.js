  
import React from "react";
import { Redirect } from "react-router";

class Logout extends React.Component {
  componentDidMount() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  render() {
    return <Redirect to='/' />;
  }
}

export default Logout;