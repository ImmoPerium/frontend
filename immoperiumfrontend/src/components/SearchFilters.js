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
            <label className="text-gray-400 text-sm font-semibold py-1 block w-1/2 sm:w-1/4 lg:w-1/2">
              Immobilienart
            </label>
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
              </span>
            </>

            <div className="flex flex-wrap -mx-2">
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-400">
                  Schlafzimmer
                </span>
                <select className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                  <option>4</option>
                </select>
              </label>
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-400">
                  Badezimmer
                </span>
                <select className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                  <option>2</option>
                </select>
              </label>
              <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                <span className="text-sm font-semibold text-gray-400">
                  Preisspanne
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
