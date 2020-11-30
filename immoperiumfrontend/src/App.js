import "./tailwind.output.css";
import { Route, Switch } from "react-router-dom";
import Register from "./views/Register.js";
import Logout from "./views/Logout.js";
import Impressum from "./views/Impressum.js";
import Footer from "./components/Footer.js";
import Explore from "./views/Explore.js";
import Home from "./views/Home.js";
import ViewProfilePage from "./views/ViewProfilePage.js";
import Navbar from "./components/navbar/Navbar";

function App() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  return (
    <div className="App">
      <Navbar token={token} user={user} />
      <Switch>
        <Route
          exact
          path="/explore"
          render={(...props) => <Explore {...props} />}
        />
        <Route exact path="/home" render={(...props) => <Home {...props} />} />
        <Route
          exact
          path="/register"
          render={(...props) => <Register {...props} />}
        />
        <Route
          exact
          path="/logout"
          render={(...props) => <Logout {...props} />}
        />
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
        {/* <Route exact path='/'render={(...props) => token && user ? <Redirect to='/dashboard' /> : <Redirect to='/login' /> } */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
