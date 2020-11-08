import './tailwind.output.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './views/Register.js';


function App() {
/*   const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(localStorage.getItem('user')); */
  return (
    <div className="App">
      {/* <NavBar token={token} setToken={setToken} /> */}
      <Switch>
      <Route exact path='/register' render={(...props) => <Register {...props} />} />
      {/* <Route exact path='/' render={(...props) => token && user ? <Redirect to='/dashboard' /> : <Redirect to='/login' /> } */}
      </Switch>
    </div>
  );
}

export default App;