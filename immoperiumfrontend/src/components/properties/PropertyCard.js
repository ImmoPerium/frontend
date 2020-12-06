import React from "react";
import ReviewRating from "./ReviewRating";

export default class PropertyCard extends React.Component {
  render() {
    return (
      <div
        className={`sm:mt-0 sm:w-80 sm:flex-shrink-0 ${
          this.props.index !== undefined && this.props.index > 0
            ? "mt-10 sm:ml-4"
            : ""
        }`}
      >
        <div>
          <div className="relative pb-5/6">
            <a href={`/immobilie/${this.props.propertyiD}`}>
              <img
                className="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover"
                src={this.props.imageUrl}
                alt=""
              />
            </a>
          </div>
          <div className="relative px-4 -mt-16">
            <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
              <div className="flex items-baseline">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Neu
                </span>
                <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                  {this.props.rooms === 1
                    ? `${this.props.rooms} zimmer`
                    : `${this.props.rooms} zimmer`}{" "}
                  &bull;
                  {this.props.house_area === 1
                    ? ` ${this.props.house_area} Quadratmeter`
                    : ` ${this.props.house_area} Quadratmeter`}
                </div>
              </div>
              <a href={`/immobilie/${this.props.propertyiD}`}>
                <h4 className="mt-1 text-gray-900 font-semibold text-lg">
                  {this.props.title}
                </h4>
              </a>
              <div className="mt-1">
                <span className="text-gray-900">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(this.props.price)}
                </span>
                <span className="ml-1 text-sm text-gray-600"> Kaltmiete</span>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-600">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 128 128"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Show"
                    d="m64 104c-41.873 0-62.633-36.504-63.496-38.057-.672-1.209-.672-2.678 0-3.887.863-1.552 21.623-38.056 63.496-38.056s62.633 36.504 63.496 38.057c.672 1.209.672 2.678 0 3.887-.863 1.552-21.623 38.056-63.496 38.056zm-55.293-40.006c4.758 7.211 23.439 32.006 55.293 32.006 31.955 0 50.553-24.775 55.293-31.994-4.758-7.211-23.439-32.006-55.293-32.006-31.955 0-50.553 24.775-55.293 31.994zm55.293 24.006c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  />
                </svg>
                <span className="ml-2 mr-3">
                  {this.props.viewCount} Beobachter{" "}
                </span>

                <svg
                  className="h-5 w-5"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Love">
                    <path
                      d="m4.3066 16.9048a8.3536 8.3536 0 0 1 0-11.5186 7.6887 7.6887 0 0 1 10.9922-.1462l.7012.69.7012-.69a7.6893 7.6893 0 0 1 10.9922.146 8.3542 8.3542 0 0 1 0 11.5191l-11.6934 12.0949z"
                      fill="#f07575"
                    />
                    <path
                      d="m28.4121 4.6909a8.6884 8.6884 0 0 0 -12.4121-.164 8.6884 8.6884 0 0 0 -12.4121.164 9.3606 9.3606 0 0 0 0 12.9087l11.6934 12.0952a.9989.9989 0 0 0 1.4375 0l11.6933-12.0948a9.3612 9.3612 0 0 0 0-12.9091zm-1.4375 11.5191-10.9746 11.3515-10.9746-11.352a7.3471 7.3471 0 0 1 0-10.1289 6.6916 6.6916 0 0 1 9.6992.0005l.5567.5756a1.03 1.03 0 0 0 1.4375 0l.5566-.5761a6.6922 6.6922 0 0 1 9.6992 0 7.3477 7.3477 0 0 1 0 10.1294z"
                      fill="#1d1e21"
                    />
                  </g>
                </svg>
                <span className="ml-2">
                  {this.props.favoriteCount} Favoriten
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
