import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import AboutApp from './Components/AboutApp/AboutApp';

import './App.css';
import PlaceById from "./Components/Place/PlaceById";

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <Router>
              <Switch>
                  <Route path="/dashboard"><DashboardPage /></Route>
                  <Route path="/aboutApp"><AboutApp /></Route>
                  <Route path="/place/:placeid" component={PlaceById}/>
                  <Route path="/"><WelcomePage /></Route>
              </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
