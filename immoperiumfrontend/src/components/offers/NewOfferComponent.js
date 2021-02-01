import React from "react";
/* import { Redirect } from "react-router-dom"; */

/* A template for a simple React component */
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToNewOffers: false,
    };
  }
  /* React Class functions here */

  redirectTo = () => {
    return this.setState({ redirectToNewOffers: true }, () =>
      this.setState({ redirectToNewOffers: false })
    );
  };

  /* Rendered JSX here */
  render() {
    return (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        {this.state.redirectToNewOffers ? "" : ""}
        <div className="flex-shrink-0">
          <a href="/newoffer">
            <img
              className="h-48 w-full object-cover"
              src="./pictures/add_new_home4.png"
              alt="a template home"
            />
          </a>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="!#" className="hover:underline invisible">
                Case Study
              </a>
            </p>
            <div className="block mt-2">
              <a href="/newoffer">
                <p
                  className="text-xl font-semibold text-gray-900"
                  onClick={() => this.redirectTo()}
                >
                  Neue Immobilie Hinzufügen
                </p>
              </a>
              <p className="mt-3 text-base text-gray-500">
                Falls du Immobilien, wie Wohnungen oder Häuser zum Anbieten
                bereitstellen möchtest kannst du diese hier hinzufügen. Andere
                Nutzer werden als Interessenten deine Immobilien entdecken
                können und mit dir in Kontakt treten.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
