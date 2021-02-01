import React from "react";
import { connect } from "react-redux";
import GitHub from "../components/social/GitHub";

class Team extends React.Component {
  /* React Class state */
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-gray-900 min-h-screen">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Unser Team
              </h2>
              <p className="text-xl text-gray-300">
                Wir sind fünf kreative Köpfe aus dem Norden Deutschlands. Wir
                haben es uns zum Ziel gemacht eine Immobilien Seite zu
                entwickeln, die den Ansprüchen aller User gerecht wird. Gute
                Features bestehender Seiten werden in unserem „Immoperium“
                vereint, Lücken die aktuell häufig genutzte Immobilien Seiten
                aufweisen werden bei uns geschlossen. Wir möchten unseren Usern
                die bestmögliche Nutzererfahrung ermöglichen und einem jedem
                Einzelnen den Weg ebnen um Immobilien zu verkaufen oder die
                Traumimmobilie zu finden. Denken Sie daran – „Das Haus das Sie
                sich erträumen steht im Immoperium vermutlich bereits bereit“.
              </p>
            </div>
            <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="./pictures/team/gregor.png"
                    alt="teammember"
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">Gregor Jaap</h3>
                      <p className="text-indigo-400">Projektmanager</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="https://github.com/vamperl001"
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">GitHub</span>
                          <GitHub />
                        </a>
                      </li>
                      <li>
                        <a
                          href="!#"
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* More... */}
              <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="./pictures/team/jan.png"
                    alt="teammember"
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">Jan Paul Meyer</h3>
                      <p className="text-indigo-400">Backend</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="https://github.com/PeterPetePeter"
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">GitHub</span>
                          <GitHub />
                        </a>
                      </li>
                      <li>
                        <a
                          href="!#"
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="./pictures/team/lucas.png"
                    alt="teammember"
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">Lucas Hartung</h3>
                      <p className="text-indigo-400">Design</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="https://github.com/LucMoH"
                          className="text-gray-400 hover:text-gray-300"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">GitHub</span>
                          <GitHub />
                        </a>
                      </li>
                      <li>
                        <a
                          href="!#"
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="./pictures/team/ilja.png"
                    alt="teammember"
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">Ilja Tscharikow</h3>
                      <p className="text-indigo-400">Frontend</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="https://github.com/Ilja2307"
                          className="text-gray-400 hover:text-gray-300"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">GitHub</span>
                          <GitHub />
                        </a>
                      </li>
                      <li>
                        <a
                          href="!#"
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="./pictures/team/sascha.png"
                    alt="teammember"
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">Sascha Majewsky</h3>
                      <p className="text-indigo-400">Technischer PM</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="https://github.com/SaschaWebDev"
                          className="text-gray-400 hover:text-gray-300"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">GitHub</span>
                          <GitHub />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/saschamajewsky/"
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Team);
