import React from "react";
import { connect } from "react-redux";
import { createRealEstate } from "../actions/index";
/* import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom"; */

class NewOffer extends React.Component {
  /* React Class state */
  constructor(props) {
    super(props);
    this.state = {
      advertisement_purpose: "",
      advertisement_description: "",
      other_description: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      ],
      streetnumber: "",
      street: "",
      city: "",
      country: "Deutschland",
      zip: "",
      rooms: "",
      house_area: "",
      rental_price_total: "",
      rental_deposit: "",
      price: "",
      purchase_type: "Miete",
      purchase_price: "",
      overall_condition: "Gut",
      basement: "Ja",
      pets_allowed: "Ja",
      barrier_free: "Ja",
      heating: "",
      offstreet_parking: "Ja",
      formError: false,
    };
  }

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handlePublish = () => {
    if (
      this.state.advertisement_purpose &&
      this.state.advertisement_description &&
      this.state.other_description &&
      this.state.streetnumber &&
      this.state.street &&
      this.state.city &&
      this.state.country &&
      this.state.zip &&
      this.state.rooms &&
      this.state.house_area &&
      this.state.purchase_type &&
      this.state.rental_deposit &&
      this.state.price &&
      this.state.overall_condition &&
      this.state.basement &&
      this.state.pets_allowed &&
      this.state.barrier_free &&
      this.state.heating &&
      this.state.offstreet_parking
    ) {
      if (this.state.formError) {
        this.setState({ formError: false });
      }
      this.props.createRealEstate(
        this.state,
        localStorage.getItem("token"),
        JSON.parse(localStorage.getItem("user")).id
      );
      this.props[0].history.push("/offers");
    } else {
      this.setState({ formError: true });
    }
  };

  render() {
    return (
      <div className="bg-gray-200 pt-8 pb-12 min-h-screen">
        <div className="mt-4">
          <div className="md:grid md:grid-cols-3 md:gap-6 ">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0 ml-8">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Deine Anzeige
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Die Informationen helfen Nutzern sich ein besseres Bild über
                  das Angebot zu machen.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="email_address"
                          className="block text-lg font-medium text-orange-400 pb-6"
                        >
                          Immobilienanzeige
                        </label>
                        <label
                          htmlFor="company_website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Titel
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="advertisement_purpose"
                            value={this.state.advertisement_purpose}
                            onChange={(event) => this.onChange(event)}
                            className="outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-"
                            placeholder=" Deine Immobilie in einem Satz"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Beschreibung
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="advertisement_description"
                          value={this.state.advertisement_description}
                          onChange={(event) => this.onChange(event)}
                          rows={3}
                          className="shadow-sm outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 mt-1 block w-full sm:text-sm rounded-md"
                          placeholder=" Was macht die Immobilie besonders? Wie könnte man alle Vorteile kurz zusammenfassen?"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Immobilienfoto
                      </label>
                      <div className="mt-2 flex justify-center pb-6 border-2 border-gray-200 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400 mt-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-orange-500 hover:text-orange-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                            >
                              <span>Datei hochladen</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">auch per Drag & Drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF bis zu 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0 ml-8">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Fakten & Zahlen
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Andere Nutzer benötigen diese wichtigen Informationen.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        {/*        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        /> */}
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email_address"
                          className="block text-lg font-medium text-orange-400"
                        >
                          Anschrift
                        </label>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Straße
                        </label>
                        <input
                          type="text"
                          name="street"
                          value={this.state.street}
                          onChange={(event) => this.onChange(event)}
                          id="first_name"
                          autoComplete="given-name"
                          className="mt-1 outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-full py-1 shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Hausnummer
                        </label>
                        <input
                          type="text"
                          name="streetnumber"
                          value={this.state.streetnumber}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="family-name"
                          className="mt-1 outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-16 py-1 shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Stadt
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={this.state.city}
                          onChange={(event) => this.onChange(event)}
                          className="mt-1 outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-full py-1 shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal_code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Postleitzahl
                        </label>
                        <input
                          type="text"
                          name="zip"
                          value={this.state.zip}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="postal-code"
                          className="mt-1 outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-20 py-1 shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Land
                        </label>
                        <select
                          name="country"
                          value={this.state.country}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Deutschland</option>
                          <option>Österreich</option>
                          <option>Schweiz</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email_address"
                          className="block text-lg font-medium text-orange-400"
                        >
                          Immobilie
                        </label>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Zimmer
                        </label>
                        <input
                          type="text"
                          name="rooms"
                          value={this.state.rooms}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="family-name"
                          className="mt-1 outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-16 py-1 shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Quadratmeter
                        </label>
                        <input
                          type="text"
                          name="house_area"
                          value={this.state.house_area}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="family-name"
                          className="mt-1 outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-16 py-1 shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Preis
                        </label>
                        <input
                          type="text"
                          name="price"
                          value={this.state.price}
                          onChange={(event) => this.onChange(event)}
                          className="mt-1 outline-none py-2 px-3 focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="postal_code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Zur Miete oder Kauf
                        </label>
                        <select
                          name="purchase_type"
                          value={this.state.purchase_type}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Miete</option>
                          <option>Kaufen</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Kautionssumme
                        </label>
                        <input
                          type="text"
                          name="rental_deposit"
                          value={this.state.rental_deposit}
                          onChange={(event) => this.onChange(event)}
                          className="mt-1 outline-none py-2 px-3 focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3"></div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Heizungsart
                        </label>
                        <input
                          type="text"
                          name="heating"
                          value={this.state.heating}
                          onChange={(event) => this.onChange(event)}
                          className="mt-1 outline-none focus:outline-none border-2 border-gray-200 focus:border-gray-500 block w-full py-1 shadow-sm sm:text-sm rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal_code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Zustand
                        </label>
                        <select
                          name="overall_condition"
                          value={this.state.overall_condition}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Gut</option>
                          <option>Mittel</option>
                          <option>Renovierungsbedürftig</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Keller vorhanden
                        </label>
                        <select
                          name="basement"
                          value={this.state.basement}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Ja</option>
                          <option>Nein</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Haustiere erlaubt
                        </label>
                        <select
                          name="pets_allowed"
                          value={this.state.pets_allowed}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Ja</option>
                          <option>Nein</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Barrierefreier Zugang
                        </label>
                        <select
                          name="barrier_free"
                          value={this.state.barrier_free}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Ja</option>
                          <option>Nein</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Parkplatz
                        </label>
                        <select
                          name="offstreet_parking"
                          value={this.state.offstreet_parking}
                          onChange={(event) => this.onChange(event)}
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Ja</option>
                          <option>Nein</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6"></div>
                </div>
              </form>
              <span className="block w-1/2 rounded-md shadow-sm pt-4">
                <button
                  type="button"
                  onClick={() => this.handlePublish()}
                  className="w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-orange active:bg-orange-400 transition duration-150 ease-in-out"
                >
                  Immobilie veröffentlichen
                </button>
                {this.state.formError ? (
                  <div style={{ color: "red" }}>
                    Bitte alle Felder ausfüllen
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createRealEstate })(NewOffer);
