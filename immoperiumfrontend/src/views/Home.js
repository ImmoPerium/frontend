import React from "react";
import logo from "./logo.svg";
import women from "./beach-work.jpg";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="px-8 py-12 max-w-xl mx-auto lg:max-w-full lg:px-0 lg:py-20 lg:relative lg:min-h-screen">
        <div className="xl:max-w-6xl lg:mx-auto">
          <div className="lg:w-7/12 lg:pl-12 lg:pr-8">
            <img src={logo} alt="logo" />
            <div className="mt-8 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12">
              <img
                className="h-56 w-full object-cover object-center sm:h-56 rounded-lg shadow-xl lg:inset-0 lg:h-full lg:object-left lg:shadow-none lg:rounded-none"
                src={women}
                alt="Woman workcationing on beach"
              />
              <svg
                className="hidden lg:block absolute inset-y-0 left-0 w-16 h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  className="text-gray-100"
                  fill="currentColor"
                  points="0,0 0,100 100,0"
                />
              </svg>
            </div>
            <h1 className="mt-8 lg:mt-12 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              You can work from anywhere.
              <br className="hidden sm:inline" />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-4 text-gray-600 text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you’re not
              on vacation.
            </p>
            <div className="mt-6">
              <Link
                to="/dashboard"
                className="px-5 py-3 inline-block bg-indigo-500 rounded-lg text-white font-semibold tracking-wide uppercase shadow-lg hover:bg-indigo-400"
              >
                Book your escape
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}