import React from "react";
import Searchbar from "../components/SearchBar";
import "../index.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }
  //inputFeld für die Location

  dynamicSearch = () => {
    return this.state.location.filter((location) =>
      location.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };
  //Dynamisches Anzeigen der Orte bei der Angabe, weil cool...Checkt ob es Orte mit dem Eingae string existieren. Aber wie verknüpfen mit Datenbank und anzeige lassen idk.
  render() {
    return (
      <div>
        <div className="relative min-h-screen bg-orange-200">
          <Searchbar history={this.props[0].history} />
          <img
            src="./pictures/landing-bg2.jpg"
            className="object-cover bg-center max-w-screen z-0"
            alt="landing screen"
          />
        </div>
      </div>
    );
  }
}
