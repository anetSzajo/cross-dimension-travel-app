import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import WelcomePage from './Components/WelcomePage/WelcomePage';

import DashboardPage from './Components/DashboardPage/DashboardPage';
import AboutApp from './Components/AboutApp/AboutApp';

import './App.css';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <Router>
          {/* <div> */}
              {/* <ul>
                  <button className="travel-button"><Link to="/dashboard" className="travel-button__link">TRAVEL</Link></button>
                  <Link to="/aboutApp"><button>About App</button></Link>
              </ul> */}
              <Switch>
                  <Route path="/dashboard"><DashboardPage /></Route>
                  <Route path="/aboutApp"><AboutApp /></Route>
                  <Route path="/"><WelcomePage /></Route>
              </Switch>
          {/* </div> */}
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
