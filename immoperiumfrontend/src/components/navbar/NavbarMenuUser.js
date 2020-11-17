import React from "react";

export default class NavbarMenuUser extends React.Component {
  render() {
    return (
      <div className="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
        <a
          href="/explore"
          className="block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900 xl:hover:bg-gray-200"
        >
          Entdecke Immobilien
        </a>
        <a
          href="/favoriten"
          className="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200"
        >
          Favoriten
        </a>
        <a
          href="/messages"
          className="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200"
        >
          Moin, Stefan
        </a>
      </div>
    );
  }
}