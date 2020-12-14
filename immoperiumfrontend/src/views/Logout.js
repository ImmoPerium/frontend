import React from "react";
/* import { Redirect } from "react-router-dom"; */

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
      tokenDelete: false,
    };
  }

  setLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({ tokenDelete: true }, () => {
      this.setRedirect();
    });
  };

  setRedirect = () => {
    setTimeout(() => this.setState({ loggedOut: true }), 2000);
  };

  componentDidMount() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  render() {
    setTimeout(() => this.setLogout(), 1500);
    if (this.state.loggedOut) {
      this.props.history.push("/");
    }

    return (
      <div>
        {this.state.loggedOut ? (
          ""
        ) : (
          <div>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center sm:min-h-0 md:min-h-screen lg:min-h-screen xl:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
                ​
                <div
                  className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div>
                    {this.state.tokenDelete ? (
                      <div className="transition duration-500 ease-in-out transform">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                          <svg
                            class="h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                          >
                            Sie wurden ausgeloggt
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm leading-5 text-gray-500">
                              Wir freuen uns auf Sie!
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="transition duration-500 ease-in-out transform">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-200">
                          <svg
                            class="h-5 w-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                          >
                            Sie werden ausgeloggt...
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm leading-5 text-gray-500">
                              Besuchen Sie uns gern wieder
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Logout;
