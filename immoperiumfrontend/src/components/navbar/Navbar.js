import React from "react";
/* import { useLocation } from 'react-router-dom' */
import { connect } from "react-redux";

import MenuToggle from "./MenuToggle";
import NavbarSearch from "./NavbarSearch";
import MenuLogo from "./MenuLogo";
import NavbarMenuUser from "./NavbarMenuUser";
import NavbarMenuGuest from "./NavbarMenuGuest";
import UserDropdown from "./UserDropdown";
import GuestDropdown from "./GuestDropdown";

class Navbar extends React.Component {
  state = { isMenuOpen: false, isFiltersOpen: false };
  constructor(props) {
    super(props);
    this.menuHandler = this.menuHandler.bind(this);
  }

  menuHandler() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  render() {
    let url_route = window.location.pathname;

    return (
      <header className="bg-white sm:flex sm:items-center sm:justify-between xl:bg-white">
        <div className="flex justify-between px-4 xl:w-72 xl:bg-white xl:justify-center">
          <MenuLogo />
          <div className="flex sm:hidden">
            <MenuToggle
              open={this.state.isMenuOpen}
              action={this.menuHandler}
            />
          </div>
        </div>
        <nav
          className={`sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between ${
            this.state.isMenuOpen ? "block" : "hidden"
          }`}
        >
          <NavbarSearch location={url_route} />
          <div className="sm:flex sm:items-center">
            {!localStorage.getItem("token") || !localStorage.getItem("user") ? (
              <NavbarMenuGuest />
            ) : (
              <NavbarMenuUser user={JSON.parse(localStorage.getItem("user"))} />
            )}
            {!localStorage.getItem("token") || !localStorage.getItem("user") ? (
              <GuestDropdown
                open={this.state.isMenuOpen}
                action={this.menuHandler}
              />
            ) : (
              <UserDropdown
                open={this.state.isMenuOpen}
                action={this.menuHandler}
              />
            )}
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer,
  };
};

export default connect(mapStateToProps, {})(Navbar);
