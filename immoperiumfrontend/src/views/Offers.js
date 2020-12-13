import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

import NewOfferComponent from "../components/offers/NewOfferComponent";
import OfferComponent from "../components/offers/OfferComponent";
import { getRealEstateById } from "../actions/index";

class Offers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (
      JSON.parse(localStorage.getItem("user")) &&
      localStorage.getItem("token")
    )
      return this.props.getRealEstateById(
        JSON.parse(localStorage.getItem("user")).id,
        localStorage.getItem("token")
      );
  }

  render() {
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
              Hier findest du eine Übersicht über alle deine angebotenen
              Immobilien.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <NewOfferComponent />
            {/* FOR EACH OFFER A NEW PROPERTY COMPONENT */}
            {this.props.offers
              ? console.log("HERE IS YOUR DATA", this.props.offers)
              : ""}
            {this.props.offers
              ? this.props.offers.map((offer) => (
                  <OfferComponent
                    title={offer.advertisement_title}
                    description={offer.advertisement_description}
                    profilePicture={
                      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    }
                    firstname={
                      JSON.parse(localStorage.getItem("user")).firstname
                    }
                    lastname={
                      JSON.parse(localStorage.getItem("user")).firstname
                    }
                    viewCount={offer.view_count}
                    favoriteCount={offer.favorite_count}
                    createdAt={offer.created_at}
                    thumbnail={offer.other_description}
                    adId={offer.id}
                  />
                ))
              : console.log("NOTHING TO DISPLAY")}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: state.usersReducer.realEstateOffersOfUser,
});

export default connect(mapStateToProps, { getRealEstateById })(Offers);
