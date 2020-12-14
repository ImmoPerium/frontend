import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUserById, getSingleAdvertisement } from "../actions/index";
class ViewOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
    let offer_id = "";
    if (this.props.match) {
      offer_id = this.props.match.offer_id;
      this.props.getSingleAdvertisement(
        offer_id,
        localStorage.getItem("token")
      );
    }
    if (
      JSON.parse(localStorage.getItem("user")) &&
      localStorage.getItem("token")
    ) {
      this.props.getUserById(
        JSON.parse(localStorage.getItem("user")).id,
        localStorage.getItem("token")
      );
    }
  }

  render() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const getUserByIdData = this.props.userByID;
    return (
      <div className="h-screen bg-white overflow-hidden flex">
        {localStorage.getItem("token") === null &&
        JSON.parse(localStorage.getItem("user")) === null ? (
          <Redirect to="/login" />
        ) : (
          ""
        )}
        {this.props.accountDeletion ? <Redirect to="/login" /> : ""}
        {this.state.showDeleteDialog ? (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 bg-gray-500 opacity-75"
                  onClick={() => this.toggleDeleteDialog()}
                />
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                ​
              </span>
              <div
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Account löschen
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Bist du sicher, dass du deinen Account löschen möchtest?
                        Dein Account kann nicht wiederhergestellt werden und
                        alle deine sozialen Interaktionen werden entfernt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => this.deleteAccount()}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Endgültig löschen
                  </button>
                  <button
                    type="button"
                    onClick={() => this.toggleDeleteDialog()}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Abbrechen
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="md:hidden">
          {/* <div className="fixed inset-0 z-40 flex">
        <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
      </div> */}
        </div>
        <div className="flex-1 flex flex-col">
          <main
            className="flex-1 overflow-y-auto focus:outline-none"
            tabIndex={0}
          >
            <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
              <div className="pt-10 pb-16">
                <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-3xl font-extrabold text-gray-900">
                    <span className="text-orange-500">
                      {this.props.singleOffer ? this.props.singleOffer.id : ""}!
                    </span>
                  </h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-6">
                    {/* Description list with inline editing */}
                    <div className="mt-10 divide-y divide-gray-200">
                      <div className="space-y-1">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Profil
                        </h3>
                        <p className="max-w-2xl text-sm text-gray-500">
                          Diese Informationen werden öffentlich dargestellt.
                        </p>
                      </div>
                      <div className="mt-6">
                        <dl className="divide-y divide-gray-200">
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Name
                            </dt>

                            {this.state.showNameInputs ? (
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  <div>
                                    <label
                                      htmlFor="password"
                                      className="block text-sm font-medium leading-5 text-gray-700 pt-4"
                                    >
                                      Vorname
                                    </label>
                                    <div className="mt-1 rounded-md shadow-sm">
                                      <input
                                        id="firstname"
                                        type="text"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        name="firstnameInput"
                                        placeholder={getUserByIdData.firstname}
                                        defaultValue={this.state.firstnameInput}
                                        onChange={this.onChange}
                                        onKeyDown={(event) =>
                                          this._handleKeyDown(event, "name")
                                        }
                                        autoComplete="off"
                                      />
                                    </div>
                                    <label
                                      htmlFor="password"
                                      className="block text-sm font-medium leading-5 text-gray-700 pt-4"
                                    >
                                      Nachname
                                    </label>
                                    <div className="mt-1 rounded-md shadow-sm">
                                      <input
                                        id="password"
                                        type="text"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        name="lastnameInput"
                                        placeholder={getUserByIdData.lastname}
                                        defaultValue={this.state.lastnameInput}
                                        onChange={this.onChange}
                                        onKeyDown={(event) =>
                                          this._handleKeyDown(event, "name")
                                        }
                                        autoComplete="off"
                                      />
                                    </div>
                                  </div>
                                </span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                  <button
                                    type="button"
                                    onClick={() => this.resetInput("name")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Abbrechen
                                  </button>
                                  <span
                                    className="text-gray-300"
                                    aria-hidden="true"
                                  >
                                    |
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => this.updateAccount("name")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Speichern
                                  </button>
                                </span>
                              </dd>
                            ) : (
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  {userData
                                    ? getUserByIdData.firstname +
                                      " " +
                                      getUserByIdData.lastname
                                    : ""}
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => this.onClick("name")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Bearbeiten
                                  </button>
                                </span>
                              </dd>
                            )}
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Photo
                            </dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt="avatar"
                                />
                              </span>
                              <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                <button
                                  type="button"
                                  className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                  Bearbeiten
                                </button>
                                <span
                                  className="text-gray-300"
                                  aria-hidden="true"
                                >
                                  |
                                </span>
                                <button
                                  type="button"
                                  className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                  Entfernen
                                </button>
                              </span>
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Email
                            </dt>

                            {this.state.showEmailInput ? (
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  <div>
                                    <label
                                      htmlFor="password"
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
                                        name="emailInput"
                                        placeholder={
                                          getUserByIdData.email_address
                                        }
                                        defaultValue={this.state.emailInput}
                                        onChange={this.onChange}
                                        onKeyDown={(event) =>
                                          this._handleKeyDown(event, "email")
                                        }
                                        autoComplete="off"
                                      />
                                    </div>
                                  </div>
                                </span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                  <button
                                    type="button"
                                    onClick={() => this.resetInput("email")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Abbrechen
                                  </button>
                                  <span
                                    className="text-gray-300"
                                    aria-hidden="true"
                                  >
                                    |
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => this.updateAccount("email")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Speichern
                                  </button>
                                </span>
                              </dd>
                            ) : (
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  {userData
                                    ? getUserByIdData.email_address
                                    : ""}
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => this.onClick("email")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Bearbeiten
                                  </button>
                                </span>
                              </dd>
                            )}
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                            <dt className="text-sm font-medium text-gray-500">
                              Telefonnummer
                            </dt>

                            {this.state.showPhoneInput ? (
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  <div>
                                    <label
                                      htmlFor="password"
                                      className="block text-sm font-medium leading-5 text-gray-700 pt-4"
                                    >
                                      Telefonnummer
                                    </label>
                                    <div className="mt-1 rounded-md shadow-sm">
                                      <input
                                        id="phone"
                                        type="text"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        name="phoneInput"
                                        placeholder={
                                          getUserByIdData.phonenumber
                                        }
                                        defaultValue={this.state.phoneInput}
                                        onChange={this.onChange}
                                        onKeyDown={(event) =>
                                          this._handleKeyDown(event, "phone")
                                        }
                                        autoComplete="off"
                                      />
                                    </div>
                                  </div>
                                </span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                  <button
                                    type="button"
                                    onClick={() => this.resetInput("phone")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Abbrechen
                                  </button>
                                  <span
                                    className="text-gray-300"
                                    aria-hidden="true"
                                  >
                                    |
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => this.updateAccount("phone")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Speichern
                                  </button>
                                </span>
                              </dd>
                            ) : (
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  {userData ? getUserByIdData.phonenumber : ""}
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => this.onClick("phone")}
                                    className="bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  >
                                    Bearbeiten
                                  </button>
                                </span>
                              </dd>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => this.toggleDeleteDialog()}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                          >
                            Account löschen
                          </button>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userByID: state.usersReducer.userByID,
  singleOffer:
    state.advertisementsReducer.singleAdvertisement.real_estate_advertisements,
});

export default connect(mapStateToProps, {
  getUserById,
  getSingleAdvertisement,
})(ViewOffer);
