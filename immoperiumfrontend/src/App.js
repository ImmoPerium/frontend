import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./tailwind.output.css";
import Register from "./views/Register.js";
import Login from "./views/Login.js";
import Logout from "./views/Logout.js";
import Impressum from "./views/Impressum.js";
import Footer from "./components/Footer.js";
import Explore from "./views/Explore.js";
import NewOffer from "./views/NewOffer.js";
import Offers from "./views/Offers.js";
import Home from "./views/Home.js";
import ViewProfilePage from "./views/ViewProfilePage.js";
import Credo from "./views/Credo.js";
import Navbar from "./components/navbar/Navbar";

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
          <Route
            exact
            path="/home"
            render={(...props) => <Home {...props} />}
          />
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
        </div>
        {/* <Route exact path='/'render={(...props) => token && user ? <Redirect to='/dashboard' /> : <Redirect to='/login' /> } */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
