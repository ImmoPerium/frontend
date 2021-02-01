import React from "react";
import { Redirect } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToImpressum: false,
      redirectToTeam: false,
    };
  }

  redirectTo = (view_name) => {
    switch (view_name) {
      case "impressum":
        return this.setState({ redirectToImpressum: true }, () =>
          this.setState({ redirectToImpressum: false })
        );
      case "team":
        return this.setState({ redirectToTeam: true }, () =>
          this.setState({ redirectToTeam: false })
        );
      default:
        return "";
    }
  };

  render() {
    return (
      <div className="container-footer">
        {this.state.redirectToImpressum ? <Redirect to="/impressum" /> : ""}
        {this.state.redirectToTeam ? <Redirect to="/team" /> : ""}
        <footer className="bg-gray-800">
          <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h4 className="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                      Immoperium
                    </h4>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          onClick={() => this.redirectTo("team")}
                          className="text-base leading-6 text-gray-300 hover:text-white cursor-pointer"
                        >
                          Über uns
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#"
                          className="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Kunde werden
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#"
                          className="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Newsletter abonnieren
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h4 className="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                      Rechtliches
                    </h4>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          onClick={() => this.redirectTo("impressum")}
                          className="text-base leading-6 text-gray-300 hover:text-white cursor-pointer"
                        >
                          Impressum
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#"
                          className="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Datenschutz
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h4 className="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                      Support
                    </h4>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          href="mailto:gregor.jaap@stud.leuphana.de"
                          className="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Kontakt & Hilfe
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h4 className="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                      Soziales
                    </h4>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          href="/#"
                          className="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="/credo"
                          className="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Unser Credo
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 xl:mt-0">
                <h4 className="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                  ABONNIERE UNSEREN NEWSLETTER
                </h4>
                <p className="mt-4 text-base leading-6 text-gray-300">
                  Lass uns gemeinsam deine Traumimmobilie finden!
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="emailAddress" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    autoComplete="off"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base leading-6 text-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline-gray focus:placeholder-gray-400 transition duration-150 ease-in-out"
                    placeholder="Email-Adresse eingeben"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-orange-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base leading-6 font-medium text-white hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-orange active:bg-orange-400 transition duration-150 ease-in-out"
                    >
                      Abonnieren
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <a href="!#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="!#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://app.pitch.com/app/public/presentation/d1bafd30-8993-414a-a6ee-4630b0d66dec/edecb258-7a86-4514-a9bc-a3dbab4c5b92"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Pitch</span>
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 321 111"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M218.233 84.0038C214.438 89.4421 208.135 93 201 93C189.402 93 180 83.598 180 72C180 60.402 189.402 51 201 51C208.259 51 214.658 54.6831 218.43 60.2824L233.945 51.1193C227.028 40.2278 214.858 33 201 33C179.461 33 162 50.4609 162 72C162 93.5391 179.461 111 201 111C214.804 111 226.932 103.829 233.864 93.0084L218.233 84.0038Z" />
                    <path d="M261 0H243V108H261V72C261 60.402 270.402 51 282 51C293.598 51 303 60.402 303 72V108H321V68.5C321 48.8939 305.106 33 285.5 33C276 33 267.371 36.7318 261 42.8094V0Z" />
                    <path d="M135 0H117V84C117 98.9117 129.088 111 144 111C150.797 111 157.007 108.488 161.754 104.343L153.054 89.5906C151.405 91.6678 148.858 93 146 93H144C143.379 93 142.772 92.937 142.186 92.8172C138.085 91.9779 135 88.3492 135 84V54H153V36H135V0Z" />
                    <path d="M96 0C90.4772 0 86 4.47715 86 10C86 15.5228 90.4772 20 96 20C101.523 20 106 15.5228 106 10C106 4.47715 101.523 0 96 0Z" />
                    <path d="M105 108V36H87V108H105Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 108H18V87H34.5C58.5244 87 78 67.5244 78 43.5C78 19.4756 58.5244 0 34.5 0H0V108ZM18 18H34.5C48.5833 18 60 29.4167 60 43.5C60 57.5833 48.5833 69 34.5 69H18V18Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/ImmoPerium"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.figma.com/proto/JAtAYd3JApkjMY6ZtQZSsi/Immoperium?node-id=143%3A10&scaling=min-zoom"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Figma</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 50 65"
                  >
                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"></path>
                    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"></path>
                    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"></path>
                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"></path>
                    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"></path>
                  </svg>
                </a>
              </div>
              <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
                2021 Immoperium
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
