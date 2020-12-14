import React from "react";
import { connect } from "react-redux";
import { toDate, differenceInDays } from "date-fns";

class FavoriteOfferComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteDialog: false,
      heartIsHovered: false,
    };
  }

  toggleDeleteDialog = () => {
    this.setState({ showDeleteDialog: !this.state.showDeleteDialog });
  };

  deleteFavorite = () => {
    this.props.deleteFavoriteCallback(this.props.adId);
    this.toggleDeleteDialog();
    this.props.refreshOffersCallback();
  };

  handleMouseEnter = () => {
    this.setState({ heartIsHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ heartIsHovered: false });
  };

  render() {
    return (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        {this.state.showDeleteDialog ? (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 bg-gray-500 opacity-75"
                  onClick={() => this.toggleDeleteDialog()}
                />
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              ></span>
              <div
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Immobilie Defavorisieren
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Bist du sicher, dass dieser Anzeige nicht mehr folgen
                        willst? Sie wird dir nicht mehr angezeigt werden und du
                        musst sie erneut auf der Plattform entdecken.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => this.deleteFavorite()}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Löschen
                  </button>
                  <button
                    type="button"
                    onClick={() => this.toggleDeleteDialog()}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Abbrechen
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex-shrink-0">
          <div className="relative cursor-pointer">
            <svg
              className="absolute top-0 right-0 float-left z-10 ml-6 h-8 w-8"
              style={{ top: "10%", left: "80%" }}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onClick={() => this.deleteFavorite()}
            >
              <g id="Love">
                <path
                  d="m4.3066 16.9048a8.3536 8.3536 0 0 1 0-11.5186 7.6887 7.6887 0 0 1 10.9922-.1462l.7012.69.7012-.69a7.6893 7.6893 0 0 1 10.9922.146 8.3542 8.3542 0 0 1 0 11.5191l-11.6934 12.0949z"
                  fill={`${
                    this.state.heartIsHovered ? "transparent" : "#f07575"
                  }`}
                />
                <path
                  d="m28.4121 4.6909a8.6884 8.6884 0 0 0 -12.4121-.164 8.6884 8.6884 0 0 0 -12.4121.164 9.3606 9.3606 0 0 0 0 12.9087l11.6934 12.0952a.9989.9989 0 0 0 1.4375 0l11.6933-12.0948a9.3612 9.3612 0 0 0 0-12.9091zm-1.4375 11.5191-10.9746 11.3515-10.9746-11.352a7.3471 7.3471 0 0 1 0-10.1289 6.6916 6.6916 0 0 1 9.6992.0005l.5567.5756a1.03 1.03 0 0 0 1.4375 0l.5566-.5761a6.6922 6.6922 0 0 1 9.6992 0 7.3477 7.3477 0 0 1 0 10.1294z"
                  fill={`${this.state.heartIsHovered ? "#1d1e21" : "#1d1e21"}`}
                />
              </g>
            </svg>
            <img
              className="h-48 w-full object-cover"
              src={this.props.thumbnail}
              alt="thumbnail of the real estate offer"
            />
          </div>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-orange-600">
              {differenceInDays(
                toDate(new Date()),
                toDate(new Date(this.props.createdAt))
              ) <= 30 ? (
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs mr-2 ">
                  Neu
                </span>
              ) : (
                ""
              )}

              <span className="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                Verfügbar
              </span>
              {/*   <a href="#" className="hover:underline">
                Neu
              </a> */}
            </p>
            <a href={`immobilie/${this.props.adId}`} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {this.props.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {this.props.description}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={`!#`}>
                {/* <span className="sr-only">Daniela Metz</span> */}
                <img
                  className="h-10 w-10 rounded-full"
                  src={this.props.profilePicture}
                  alt="profile of user"
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 pb-1">
                <span>{this.props.firstname + " " + this.props.lastname}</span>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500 max-w-full relative">
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
                <span className="ml-2 mr-4">
                  {this.props.viewCount} Aufrufe{" "}
                </span>

                {/* <span aria-hidden="true">·</span> */}
                <svg
                  className="ml-4 h-5 w-5"
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
                <span className="ml-4">
                  {this.props.favoriteCount} Favoriten
                </span>
                <div className="w-24 pl-4 pb-2">
                  <div className="interactions flex flex-row pl-4"></div>
                </div>
                {/*             */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(FavoriteOfferComponent);
