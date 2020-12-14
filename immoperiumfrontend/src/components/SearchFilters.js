import React from "react";

class SearchFilters extends React.Component {
  render() {
    const PADDING = 5;
    const SLIDER = document.querySelector("#slider");
    const MENUITEMS = document.querySelectorAll(".menu-slider-icon");

    MENUITEMS.forEach((item) => {
      item.addEventListener("click", function (e) {
        const BUTTON = findButtonInPath(e);
        moveSlider(SLIDER, findButtonXPosition(BUTTON));
        setAktivClass(BUTTON);
      });
    });

    function setAktivClass(elm) {
      MENUITEMS.forEach((item) => {
        item.classList.remove("aktiv");
      });
      elm.classList.add("aktiv");
    }

    function moveSlider(slider, position) {
      slider.style.transform = `translate(${position}px,  0)`;
    }

    function findButtonXPosition(elm) {
      return Math.round(elm.offsetLeft - PADDING);
    }

    function findButtonInPath(event) {
      let element;
      event.path.forEach((elm) => {
        if (elm.classList) {
          if (elm.classList.contains("menu-slider-icon")) {
            element = elm;
          }
        }
      });
      return element;
    }

    return (
      <div
        className={`xl:block xl:h-full xl:flex xl:flex-col xl:justify-between xl:h-full ${
          this.props.open ? "block" : "hidden"
        }`}
      >
        <div className="lg:flex xl:block xl:overflow-y-auto">
          <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
            <span className="relative z-0 inline-flex shadow-sm rounded-md">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Haus
              </button>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Wohnung
              </button>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Beide
              </button>
            </span>

            <>
              {/* On: "bg-indigo-600", Off: "bg-gray-200" */}
              <span
                role="checkbox"
                tabIndex={0}
                aria-checked="false"
                className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
              >
                {/* On: "translate-x-5", Off: "translate-x-0" */}
                <span
                  aria-hidden="true"
                  className="translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                >
                  {/* On: "opacity-0 ease-out duration-100", Off: "opacity-100 ease-in duration-200" */}
                  <span className="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
                    <svg
                      className="h-3 w-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" */}
                  <span className="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
                    <svg
                      className="h-3 w-3 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                  </span>
                </span>
              </span>
            </>

            <label className="text-gray-400 text-sm font-semibold py-1 block w-1/2 sm:w-1/4 lg:w-1/2">
              Immobilienart
            </label>
            <div
              className="menu-slider-container"
              style={{
                display: "flex",
                width: "auto",
                padding: "0.1rem",
                backgroundColor: "#ed8936",
                borderRadius: "6rem",
                maxWidth: "18rem",
                position: "relative",
              }}
            >
              <button
                className="aktiv menu-slider-icon"
                style={{
                  border: "none",
                  background: "transparent",
                  position: "relative",
                  zIndex: 2,
                  width: "5rem",
                  height: "3rem",
                  borderRadius: "5rem",
                  cursor: "pointer",
                  transition: "all 250ms",
                  margin: "0 1rem 0 0",
                }}
              >
                <img
                  className="aktiv h-5 w-5"
                  style={{
                    opacity: 1,
                    transform: "translate(150%, 40%) scale(1.2)",
                  }}
                  src="./pictures/icons/house.svg"
                  alt="house"
                />
                <img
                  className="normal h-5 w-5"
                  style={{ opacity: 0 }}
                  src="./pictures/icons/house.svg"
                  alt="house"
                />
              </button>
              <button
                className="menu-slider-icon"
                style={{
                  border: "none",
                  background: "transparent",
                  position: "relative",
                  zIndex: 2,
                  width: "5rem",
                  height: "3rem",
                  borderRadius: "5rem",
                  cursor: "pointer",
                  transition: "all 250ms",
                  margin: "0 1rem 0 0",
                }}
              >
                <img
                  className="aktiv h-5 w-5"
                  style={{
                    opacity: 1,
                    transform: "translate(150%, 55%) scale(1.7)",
                  }}
                  src="./pictures/icons/couch.svg"
                  alt="couch svg"
                />
                <img
                  className="normal h-5 w-5"
                  style={{ opacity: 0 }}
                  src="./pictures/icons/couch.svg"
                  alt="couch"
                />
              </button>
              <button
                className="menu-slider-icon"
                style={{
                  border: "none",
                  background: "transparent",
                  position: "relative",
                  zIndex: 2,
                  width: "5rem",
                  height: "3rem",
                  borderRadius: "5rem",
                  cursor: "pointer",
                  transition: "all 250ms",
                  margin: "0 1rem 0 0",
                }}
              >
                <img
                  className="aktiv h-5 w-5"
                  style={{
                    opacity: 1,
                    transform: "translate(150%, 50%) scale(1.4)",
                  }}
                  src="./pictures/icons/house_and_couch2.svg"
                  alt="couch2"
                />
                <img
                  className="normal h-5 w-5"
                  style={{ opacity: 0 }}
                  src="./pictures/icons/house_and_couch2.svg"
                  alt="house and couch2"
                />
              </button>
              <div
                id="slider"
                className="menu-slider-bg"
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                  zIndex: 1,
                  width: "4rem",
                  height: "2.5rem",
                  borderRadius: "3rem",
                  backgroundColor: "#252f3f",
                  transform: "translate(5%, -5%)",
                  transition: "all 250ms",
                }}
              ></div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-500">
                  Bedrooms
                </span>
                <select className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                  <option>4</option>
                </select>
              </label>
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-500">
                  Bathrooms
                </span>
                <select className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                  <option>2</option>
                </select>
              </label>
              <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                <span className="text-sm font-semibold text-gray-500">
                  Price Range
                </span>
                <select className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                  <option>Up to $2,000/wk</option>
                </select>
              </label>
            </div>
          </div>
          {/*        <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
            <span className="block text-sm font-semibold text-gray-500">
              Immo
            </span>
            <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="Wohnung"
                />
                <span className="ml-2 text-white">Wohnung</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="Haus"
                />
                <span className="ml-2 text-white">Haus</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="loft"
                />
                <span className="ml-2 text-white">Loft</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="townhouse"
                />
                <span className="ml-2 text-white">Townhouse</span>
              </label>
            </div>
          </div> */}
          <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
            <span className="block text-sm font-semibold text-gray-500">
              Eigenschaften
            </span>
            <div className="sm:flex sm:-mx-2 sm:flex-wrap">
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="balcony"
                />
                <span className="ml-2 text-white">Haustiere</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="pool"
                />
                <span className="ml-2 text-white">Raucher</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="beach"
                />
                <span className="ml-2 text-white">Pool</span>
              </label>
            </div>
          </div>
        </div>
        {/*      <div className="bg-gray-900 px-4 py-4 sm:text-right">
          <button className="block w-full sm:w-auto sm:inline-block bg-orange-500 hover:bg-orange-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">
            Suchkritieren anpassen
          </button>
        </div> */}
      </div>
    );
  }
}

export default SearchFilters;
