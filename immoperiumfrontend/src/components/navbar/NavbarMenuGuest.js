import React from "react";
import { Redirect } from "react-router-dom";

export default class NavbarMenuGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToSignUp: false,
      redirectToExplore: false,
      redirectToLogin: false,
    };
  }

  redirectTo = (view_name) => {
    switch (view_name) {
      case "signup":
        return this.setState({ redirectToSignUp: true }, () =>
          this.setState({ redirectToSignUp: false })
        );
      case "explore":
        return this.setState({ redirectToExplore: true }, () =>
          this.setState({ redirectToExplore: false })
        );
      case "login":
        return this.setState({ redirectToLogin: true }, () =>
          this.setState({ redirectToLogin: false })
        );
      default:
        return "";
    }
  };

  render() {
    return (
      <div className="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0 select-none">
        {this.state.redirectToSignUp ? <Redirect to="/register" /> : ""}

        {this.state.redirectToExplore ? <Redirect to="/explore" /> : ""}

        {this.state.redirectToLogin ? <Redirect to="/login" /> : ""}

        <div
          onClick={() => this.redirectTo("explore")}
          className="block px-3 pt-2 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900 xl:hover:bg-gray-200 mr-2 cursor-pointer select-none"
        >
          Entdecke Immobilien
        </div>
        <div
          onClick={() => this.redirectTo("login")}
          className="block px-3 pt-2 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900 xl:hover:bg-gray-200 mr-2 cursor-pointer select-none"
        >
          Einloggen
        </div>
        <span className="inline-flex rounded-md shadow-sm px-3">
          <button
            onClick={() => this.redirectTo("signup")}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition ease-in-out duration-150 select-none"
          >
            Neu? Jetzt anmelden
          </button>
        </span>
      </div>
    );
  }
}
