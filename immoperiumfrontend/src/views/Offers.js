import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import NewOfferComponent from "../components/offers/NewOfferComponent";
import OfferComponent from "../components/offers/OfferComponent";

/* import {
  getAllTours,
  getSingleUserById,
  getSingleGuidesTours,
} from "../actions"; */

/* A template for a more complex React component  */
class Offers extends React.Component {
  /* React Class state */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* React Class functions here */

  render() {
    /* Functions and code for usage in or before JSX here */
    return (
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Deine Immobilienangebote
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Hier findest du eine Übersicht über alle deiner angebotenen
              Immobilien.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* HERE REAL ESTATE COMPONENTS */}
            {/* ADD NEW COMPONENT */}
            <NewOfferComponent />
            {/* FOR EACH OFFER A NEW PROPERTY COMPONENT */}
            <OfferComponent
              title={"Title"}
              description={"description"}
              profilePicture={
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              firstname={"Vorname"}
              lastname={"Nachname"}
              viewCount={3}
              favoriteCount={4}
              createdAt={25}
            />
          </div>
        </div>
      </div>
    );
  }
}

/* Import Redux State to props here */
const mapStateToProps = (state) => ({
  /*   tourProps: state.tourReducer.tours,
  currentUser: state.userReducer.currentUser, */
});

/* Import Action methods here  */
export default connect(mapStateToProps, {
  /*   getAllTours,
  getSingleUserById,
  getSingleGuidesTours, */
})(Offers);
