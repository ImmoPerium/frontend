import React from "react";
import logo from "./logo.svg";
import women from "./beach-work.jpg";
import { Link } from "react-router-dom";
import "../index.css";
import Searchbar from "../components/SearchBar";

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
        <div className="relative min-h-screen bg-gradient-to-b from-white to-orange-200 pt-24">
          <Searchbar />
          <img
            src="./pictures/landing-bg2.jpg"
            className="object-cover bg-center max-w-screen z-0"
          />
        </div>
      </div>
    );
  }
}
