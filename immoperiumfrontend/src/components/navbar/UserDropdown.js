import React from "react";
import { Redirect } from "react-router-dom";

export default class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToSettings: "",
      redirectToLogout: "",
    };
  }

  redirectTo = (view_name) => {
    switch (view_name) {
      case "settings":
        return this.setState({ redirectToSettings: true }, () =>
          this.setState({ redirectToSettings: false })
        );
      case "logout":
        return this.setState({ redirectToLogout: true }, () =>
          this.setState({ redirectToLogout: false })
        );
      default:
        return "";
    }
  };

  render() {
    return (
      <div className="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
        {this.state.redirectToSettings ? <Redirect to="/profile" /> : <></>}
        {this.state.redirectToLogout ? <Redirect to="/logout" /> : <></>}
        <div className="flex items-center sm:hidden">
          <a href="/profile">
            <img
              className="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2527&q=80"
              alt=""
            />
          </a>
        </div>
        <div className="mt-5 sm:hidden">
          <div
            onClick={() => this.redirectTo("settings")}
            className="block text-gray-400 hover:text-white"
          >
            Einstellungen
          </div>
          {/* <a href="#account" className="block text-gray-400 hover:text-white">
            Einstellungen
          </a> */}
          {/*       <a
            href="#sign-out"
            className="mt-3 block text-gray-400 hover:text-white"
          >
            Ausloggen
          </a> */}
          <div
            onClick={() => this.redirectTo("logout")}
            className="block text-gray-400 hover:text-white"
          >
            Ausloggen
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="relative">
            <button
              type="button"
              onClick={this.props.action}
              className="block focus:outline-none"
            >
              <span
                className={`block h-8 w-8 overflow-hidden rounded-full border-2 ${
                  this.props.open
                    ? "border-white xl:border-orange-400"
                    : "border-gray-600 xl:border-orange-200"
                }`}
              >
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2527&q=80"
                  alt=""
                />
              </span>
            </button>
            <div className={`${this.props.open ? "block" : "hidden"}`}>
              <button
                type="button"
                onClick={this.props.action}
                className="z-30 block fixed inset-0 w-full h-full cursor-default"
              ></button>
              <div className="absolute z-40 right-0">
                <div
                  className={`mt-3 bg-white xl:border rounded-lg w-48 py-2 shadow-xl ${
                    this.props.open ? "block" : "hidden"
                  }`}
                >
                  <div
                    onClick={() => this.redirectTo("settings")}
                    className="block hover:text-white text-gray-800 px-4 py-2 hover:bg-orange-400 cursor-pointer"
                  >
                    Einstellungen
                  </div>
                  <div
                    onClick={() => this.redirectTo("logout")}
                    className="block hover:text-white text-gray-800 px-4 py-2 hover:bg-orange-400 cursor-pointer"
                  >
                    Ausloggen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
