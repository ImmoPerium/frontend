import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { sendLogin } from "../actions/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });
  onClick = () => {
    if (
      this.state.email &&
      this.state.password
    ) {
      console.log(
        "CALLED",
        this.state.email,
        this.state.password
      );
      this.props.sendLogin(
        this.state.email,
        this.state.password
      );
    }
  };

  render() {
    return (
      <div id="container-register">
        {JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).id ? <Redirect to="/" /> : ""}
        <div className="min-h-screen bg-white flex">
          <div className="flex-1 flex flex-col justify-center pt-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div align="center">
                <img
                  className="h-16"
                  src="./pictures/immoperium_logo.png"
                  alt="Immoperium Logo"
                />
                <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                  Logge dich ein
                </h2>
                <p className="mt-2 text-sm leading-5 text-gray-600 max-w">
                  <a className="font">und werde ein Teil des Immoperiums!</a>
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700 pt-4"
                >
                  E-Mail-Adresse
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700 pt-4"
                >
                  Passwort
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
              </div>
              <div>
                <span className="block w-full rounded-md shadow-sm pt-4">
                  <button
                    type="button"
                    onClick={this.onClick}
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-orange active:bg-orange-400 transition duration-150 ease-in-out"
                  >
                    Jetzt einloggen
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative w-0 flex-1 bg-white">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="./pictures/signup-side-image7.png"
              alt="Haus"
            />
          </div>
        </div>
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer,
  };
};

export default connect(mapStateToProps, { sendLogin })(Login);
