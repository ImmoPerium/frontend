import React from "react";

export default class UserDropdown extends React.Component {
  render() {
    return (
      <div className="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
        <div className="flex items-center sm:hidden">
          <a href="/profile">
            <img
              className="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
              alt=""
            />
          </a>
          <span className="ml-4 font-semibold text-gray-200 sm:hidden">
            Isla Schoger
          </span>
        </div>
        <div className="mt-5 sm:hidden">
          <a href="#account" className="block text-gray-400 hover:text-white">
            Account settings
          </a>
          <a
            href="#support"
            className="mt-3 block text-gray-400 hover:text-white"
          >
            Support
          </a>
          <a
            href="#sign-out"
            className="mt-3 block text-gray-400 hover:text-white"
          >
            Sign out
          </a>
        </div>
        <div className="hidden sm:block">
          <div className="relative">
            <button
              type="button"
              onClick={this.props.action}
              className="block focus:outline-none"
            >
              <span
                className={`block h-8 w-8 overflow-hidden rounded-full border-2 ${
                  this.props.open
                    ? "border-white xl:border-indigo-500"
                    : "border-gray-600 xl:border-gray-300"
                }`}
              >
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                  alt=""
                />
              </span>
            </button>
            <div className={`${this.props.open ? "block" : "hidden"}`}>
              <button
                type="button"
                onClick={this.props.action}
                className="z-30 block fixed inset-0 w-full h-full cursor-default"
              ></button>
              <div className="absolute z-40 right-0">
                <div
                  className={`mt-3 bg-white xl:border rounded-lg w-48 py-2 shadow-xl ${
                    this.props.open ? "block" : "hidden"
                  }`}
                >
                  <a
                    href="#account"
                    className="block hover:text-white text-gray-800 px-4 py-2 hover:bg-indigo-500"
                  >
                    Account settings
                  </a>
                  <a
                    href="#support"
                    className="block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-indigo-500"
                  >
                    Support
                  </a>
                  <a
                    href="#sign-out"
                    className="block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-indigo-500"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
