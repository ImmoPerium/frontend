import React from "react";
import { connect } from "react-redux";
import { getSingleAdvertisement, getUserById } from "../actions/index";
import PropertyCard from "../components/properties/PropertyCard";
class ViewOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
    let id = "";
    if (this.props.match.params.id) {
      id = this.props.match.params.id;
      this.props.getSingleAdvertisement(id, localStorage.getItem("token"));
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
      <div
        className="min-h-screen overflow-hidden flex"
        style={{ backgroundColor: "#e5e7eb" }}
      >
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
                <div className="px-4 sm:px-6 md:px-0 mb-4">
                  <h1 className="text-3xl font-extrabold text-gray-900">
                    <span className="text-orange-500">
                      {this.props.singleOffer
                        ? this.props.singleOffer.advertisement_purpose
                        : ""}
                    </span>
                  </h1>
                  <h2 className="text-xl text-gray-900">
                    <span className="text-gray-500">
                      {this.props.singleOffer
                        ? this.props.singleOffer.advertisement_description
                        : ""}
                    </span>
                  </h2>
                </div>
                <div></div>
                <PropertyCard
                  className="mt-4"
                  key={this.props.singleOffer}
                  index={this.props.singleOffer}
                  propertyiD={this.props.singleOffer.id}
                  imageUrl={this.props.singleOffer.other_description}
                  rooms={parseInt(this.props.singleOffer.rooms)}
                  house_area={parseInt(this.props.singleOffer.house_area)}
                  title={this.props.singleOffer.advertisement_purpose}
                  price={this.props.singleOffer.rental_price_total}
                  viewCount={this.props.singleOffer.view_count}
                  favoriteCount={this.props.singleOffer.favorite_count}
                />
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-6">
                    {/* Description list with inline editing */}
                    <div className="mt-10 divide-y divide-gray-200">
                      <div className="space-y-1">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Informationen zur Immobilie
                        </h3>
                        <p className="max-w-2xl text-sm text-gray-500">
                          Bei Fragen kontaktieren Sie den Vermittler direkt.
                        </p>
                        <button
                          type="button"
                          onClick={this.onClick}
                          className="w-1/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-orange active:bg-orange-400 transition duration-150 ease-in-out"
                        >
                          Kontakt aufnehmen
                        </button>
                      </div>
                      <div className="mt-6">
                        <dl className="divide-y divide-gray-200">
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Adresse
                            </dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer
                                  ? this.props.singleOffer.street +
                                    " " +
                                    this.props.singleOffer.streetnumber
                                  : ""}
                              </span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer
                                  ? this.props.singleOffer.zip +
                                    " " +
                                    this.props.singleOffer.city
                                  : ""}
                              </span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer
                                  ? this.props.singleOffer.country
                                  : ""}
                              </span>
                            </dd>
                          </div>

                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Kosten
                            </dt>

                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {userData
                                  ? this.props.singleOffer.rental_price_total +
                                    " € Kaltmiete"
                                  : ""}
                              </span>
                              <span className="ml-4 flex-shrink-0"></span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer
                                  ? this.props.singleOffer.street +
                                    " " +
                                    this.props.singleOffer.streetnumber
                                  : ""}
                              </span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer
                                  ? this.props.singleOffer.rental_deposit +
                                    " € Kaution"
                                  : ""}
                              </span>
                            </dd>
                          </div>

                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Ausstattung
                            </dt>

                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer
                                  ? this.props.singleOffer.heating
                                  : ""}
                              </span>
                              <span className="ml-4 flex-shrink-0"></span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer
                                  ? this.props.singleOffer.house_area +
                                    "m² Wohnfläche"
                                  : ""}
                              </span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer
                                  ? "Zustand: " +
                                    this.props.singleOffer.overall_condition
                                  : ""}
                              </span>
                            </dd>
                          </div>

                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Besonderheiten
                            </dt>

                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer.pets_allowed
                                  ? "Haustiere erlaubt"
                                  : ""}
                              </span>
                              <span className="ml-4 flex-shrink-0"></span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.barrier_free
                                  ? "Barrierefreier Zugang"
                                  : "Kein barrierefreier Zugang"}
                              </span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.offstreet_parking
                                  ? "Parkplatz vorhanden"
                                  : "Kein Parkplatz vorhanden"}
                              </span>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500"></dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                {this.props.singleOffer.basement
                                  ? "Keller vorhanden"
                                  : "Kein Keller vorhanden"}
                              </span>
                            </dd>
                          </div>
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
  singleOffer: state.advertisementsReducer.singleAdvertisement,
});

export default connect(mapStateToProps, {
  getUserById,
  getSingleAdvertisement,
})(ViewOffer);
