import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
/* import { getUserById } from "../actions/index"; */
class NavbarMenuUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToExplore: false,
      redirectToNewOffer: false,
      redirectToFavorites: false,
    };
  }

  redirectTo = (view_name) => {
    switch (view_name) {
      case "explore":
        return this.setState({ redirectToExplore: true }, () =>
          this.setState({ redirectToExplore: false })
        );
      case "offers":
        return this.setState({ redirectToNewOffer: true }, () =>
          this.setState({ redirectToNewOffer: false })
        );
      case "favorites":
        return this.setState({ redirectToFavorites: true }, () =>
          this.setState({ redirectToFavorites: false })
        );
      default:
        return "";
    }
  };

  render(props) {
    return (
      <div className="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0 select-none">
        {this.state.redirectToExplore ? <Redirect to="/explore" /> : ""}

        {this.state.redirectToNewOffer ? <Redirect to="/offers" /> : ""}

        {this.state.redirectToFavorites ? <Redirect to="/favorites" /> : ""}

        <div
          onClick={() => this.redirectTo("explore")}
          className="mt-1 block px-3 py-1 rounded font-semibold hover:bg-gray-200 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 text-gray-900 xl:hover:bg-gray-200 cursor-pointer"
        >
          Entdecke Immobilien
        </div>
        <div
          onClick={() => this.redirectTo("offers")}
          className="mt-1 block px-3 py-1 rounded font-semibold hover:bg-gray-200 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 text-gray-900 xl:hover:bg-gray-200 cursor-pointer"
        >
          Deine Immobilien
        </div>
        <div
          onClick={() => this.redirectTo("favorites")}
          className="mt-1 block px-3 py-1 rounded font-semibold hover:bg-gray-200 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 text-gray-900 xl:hover:bg-gray-200 cursor-pointer"
        >
          Favoriten
        </div>
        <a className="mt-1 block px-3 py-1 rounded font-semibold text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 cursor-default">
          {this.props && this.props.userByID.firstname
            ? `Moin, ${this.props.userByID.firstname}`
            : `Moin, ${JSON.parse(localStorage.getItem("user")).firstname}`}
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userByID: state.usersReducer.userByID,
});

export default connect(mapStateToProps, {})(NavbarMenuUser);
