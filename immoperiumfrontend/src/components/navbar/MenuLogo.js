import React from "react";

export default class MenuLogo extends React.Component {
  render() {
    return (
      <div>
        <a href="/" className="">
        <img
          className="h-20"
          src="./pictures/immoperium_logo_horizontal.png"
          alt="Immoperium Logo"
        />
        </a>
      </div>
    );
  }
}