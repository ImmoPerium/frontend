import React from "react";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      location: "",
      minbudget: "",
      maxbudget: "",
      open: false,
      redirectToExplore: false,
    };
  }
  setLocationValue = () => {
    this.setState({});
  };

  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  handleSearchClick = () => {
    if (this.state.location || this.state.minbudget || this.state.maxbudget) {
      localStorage.setItem(
        "filter",
        JSON.stringify({
          location: this.state.location ? this.state.location : "",
          minbudget: this.state.minbudget ? this.state.minbudget : "",
          maxbudget: this.state.maxbudget ? this.state.maxbudget : "",
        })
      );
    } else {
      localStorage.setItem(
        "filter",
        JSON.stringify({
          location: "",
          minbudget: "",
          maxbudget: "",
        })
      );
    }
    this.setState({ redirectToExplore: true }, () =>
      this.setState({ redirectToExplore: false })
    );
  };

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  _handleKeyDown = (e, change_input) => {
    if (e.key === "Enter") {
      this.handleSearchClick();
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  redirectToExplore = () => {
    this.props.history.push("/explore");
  };

  render() {
    return (
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {this.state.redirectToExplore ? this.redirectToExplore() : ""}
        <div className="relative flex rounded-md border-2 border-gray-300 bg-white text-left divide-x-2 divide-gray-200">
          <div className="absolute divide-x-0 border-transparent inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="text-gray-600 h-4 w-4 divide-x-0 border-transparent"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="py-2 w-50 pr-24 px-10 border-transparent text-xl focus:outline-none"
            key="random1"
            placeholder={"Traumort eingeben"}
            style={{ textIndent: "35px" }}
            onChange={(event) => {
              this.onChange(event);
            }}
            onKeyDown={(event) => this._handleKeyDown(event, "name")}
            name="location"
            value={this.state.location}
          />
          <div className="container" ref={this.container.current}>
            <button
              type="button"
              onClick={this.handleButtonClick}
              className="relative inline-flex justify-center w-full px-5 py-2 text-xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Budget
              <svg
                className="-mr-1 ml-2 h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {this.state.open && (
              <div className="dropdown">
                <div className="display:none absolute w-35 rounded-md shadow-lg bg-white divide-y-2 divide-gray-200 text-xl">
                  <div className="relative straight-md py-2">
                    <div className="absolute inset-y-2 left-0 pl-3 flex items-center">
                      <span className="text-gray-500 sm:text-sm texl-l">
                        ab:
                      </span>
                    </div>
                    <input
                      type="text"
                      id="company_website"
                      name="minbudget"
                      value={this.state.minbudget}
                      onChange={(event) => {
                        this.onChange(event);
                      }}
                      className="block w-full h-full pl-16 sm:pl-14 sm:text-sm texl-l rounded-md focus:outline-none"
                      placeholder="in Euro"
                    />
                  </div>
                  <div className="relative straight-md py-2">
                    <div className="absolute inset-y-2 left-0 pl-3 flex items-center">
                      <span className="text-gray-500 sm:text-sm texl-l">
                        bis:
                      </span>
                    </div>
                    <input
                      type="text"
                      id="company_website"
                      name="maxbudget"
                      value={this.state.maxbudget}
                      onChange={(event) => {
                        this.onChange(event);
                      }}
                      className="block w-full h-full pl-16 sm:pl-14 sm:text-sm texl-l rounded-md focus:outline-none"
                      placeholder="in Euro"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => this.handleSearchClick()}
            className="inline-flex divide-x-0 border-transparent items-center w-35 px-5 text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none"
          >
            Suchen
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
