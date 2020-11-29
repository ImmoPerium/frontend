import React from "react";

export default class GuestDropdown extends React.Component {
  render() {
    return (
      <div className="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0 select-none">
        <div className="flex items-center sm:hidden select-none">
          <img
            className="h-10 w-10 object-cover rounded-full border-2 border-gray-600 select-none"
            src="./pictures/guest_avatar.png"
            alt=""
          />
          <span className="ml-4 font-semibold text-gray-200 sm:hidden select-none">Isla Schoger</span>
        </div>
        <div className="hidden sm:block">
          <div className="relative">
            <div onClick={this.props.action} className="block focus:outline-none select-none">
              <span
                className={`block h-10 w-10 overflow-hidden rounded-full border-2 select-none ${
                  this.props.open ? "border-white xl:border-indigo-500" : "border-gray-600 xl:border-gray-300"
                }`}
              >
                <img
                  className="h-full w-full object-cover select-none"
                  src="./pictures/guest_avatar.png"
                  alt=""
                />
              </span>
            </div>
            <div className={`${this.props.open ? "block" : "hidden"}`}>
              <div onClick={this.props.action} className="z-30 block fixed inset-0 w-full h-full cursor-default"></div>
              <div className="absolute z-40 right-0">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}