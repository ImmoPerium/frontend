import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import Navbar from "./components/navbar/Navbar";
import Team from "./sections/Team.js";
import "./tailwind.output.css";
import Credo from "./views/Credo.js";
import Explore from "./views/Explore.js";
import Favorites from "./views/Favorites.js";
import Home from "./views/Home.js";
import Impressum from "./views/Impressum.js";
import Login from "./views/Login.js";
import Logout from "./views/Logout.js";
import NewOffer from "./views/NewOffer.js";
import Offers from "./views/Offers.js";
import Register from "./views/Register.js";
import ViewOffer from "./views/ViewOffer.js";
import ViewProfilePage from "./views/ViewProfilePage.js";

const history = createBrowserHistory();

function App() {
  /*   const token = localStorage.getItem("token");
  const user = localStorage.getItem("user"); */

  return (
    <div className="App min-h-screen">
      <Router history={history}>
        <Navbar /* token={token} user={user} */ />
        <div className="route-app min-h-screen">
          <Route
            exact
            path="/explore"
            render={(...props) => <Explore {...props} />}
          />
          <Route
            exact
            path="/newoffer"
            render={(...props) => <NewOffer {...props} />}
          />
          <Route
            exact
            path="/offers"
            render={(...props) => <Offers {...props} />}
          />
          <Route exact path="/immobilie/:id" component={ViewOffer} />
          <Route exact path="/" render={(...props) => <Home {...props} />} />
          <Route exact path="/!#" render={(...props) => <Home {...props} />} />
          <Route
            exact
            path="/register"
            render={(...props) => <Register {...props} />}
          />
          <Route exact path="/logout" component={Logout} />
          <Route
            exact
            path="/impressum"
            render={(...props) => <Impressum {...props} />}
          />
          <Route
            exact
            path="/favorites"
            render={(...props) => <Favorites {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={(...props) => <ViewProfilePage {...props} />}
          />
          <Route
            exact
            path="/credo"
            render={(...props) => <Credo {...props} />}
          />
          <Route
            exact
            path="/login"
            render={(...props) => <Login {...props} />}
          />
          <Route
            exact
            path="/team"
            render={(...props) => <Team {...props} />}
          />
        </div>
        {/* <Route exact path='/'render={(...props) => token && user ? <Redirect to='/dashboard' /> : <Redirect to='/login' /> } */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
