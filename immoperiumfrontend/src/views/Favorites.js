import React from "react";
import { connect } from "react-redux";
import {
  getFavoriteRealEstateById,
  getUserById,
  removeFavoriteOffer,
} from "../actions/index";
import FavoriteOfferComponent from "../components/offers/FavoriteOfferComponent";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (
      JSON.parse(localStorage.getItem("user")) &&
      localStorage.getItem("token")
    ) {
      this.props.getFavoriteRealEstateById(
        JSON.parse(localStorage.getItem("user")).id,
        localStorage.getItem("token")
      );
      this.props.getUserById(
        JSON.parse(localStorage.getItem("user")).id,
        localStorage.getItem("token")
      );
    }
  }

  unfavoriteOffer = async (offer_id) => {
    if (offer_id) {
      this.unfavoriteOfferAsync(
        JSON.parse(localStorage.getItem("user")).id,
        offer_id,
        localStorage.getItem("token")
      ).then(() =>
        setTimeout(() => {
          this.props.getUserById(
            JSON.parse(localStorage.getItem("user")).id,
            localStorage.getItem("token")
          );
        }, 800)
      );
    }
  };

  unfavoriteOfferAsync = async (user_id, offer_id, token) => {
    await this.props.removeFavoriteOffer(user_id, offer_id, token);
  };

  render() {
    return (
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 min-h-screen">
        <div className="absolute inset-0 bg-gray-200">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Deine Lieblingsimmobilie
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Behalte deine Favoriten im Auge bevor sie jemand anders schnappt!
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none w-full">
            {this.props.offers && this.props.userByID.favorite_advertisements
              ? this.props.offers
                  .filter((offer) =>
                    this.props.userByID.favorite_advertisements
                      .split("-")
                      .includes(offer.id.toString())
                  )
                  .map((offer) => (
                    <FavoriteOfferComponent
                      title={offer.advertisement_purpose}
                      description={offer.advertisement_description}
                      profilePicture={
                        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2527&q=80"
                      }
                      firstname={
                        JSON.parse(localStorage.getItem("user")).firstname
                      }
                      lastname={
                        JSON.parse(localStorage.getItem("user")).lastname
                      }
                      viewCount={offer.view_count}
                      favoriteCount={offer.favorite_count}
                      createdAt={offer.created_at}
                      thumbnail={offer.other_description}
                      deleteFavoriteCallback={(offer_id) =>
                        this.unfavoriteOffer(offer_id)
                      }
                      refreshOffersCallback={() =>
                        this.props.getFavoriteRealEstateById(
                          JSON.parse(localStorage.getItem("user")).id,
                          localStorage.getItem("token")
                        )
                      }
                      adId={offer.id}
                    />
                  ))
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: state.usersReducer.favoriteRealEstateOffersOfUser,
  userByID: state.usersReducer.userByID,
});

export default connect(mapStateToProps, {
  getFavoriteRealEstateById,
  getUserById,
  removeFavoriteOffer,
})(Favorites);
