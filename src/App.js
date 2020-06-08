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
import Page404 from "./Components/Page404/Page404";
import PlaceCreateForm from './Components/PlaceCreateForm/PlaceCreateForm';
import './App.css';
import PlaceById from "./Components/Place/PlaceById";
import PlaceUpdateForm from "./Components/PlaceUpdateForm/PlaceUpdateForm";

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <Router>
              <Switch>
                  <Route path="/dashboard"><DashboardPage /></Route>
                  <Route path="/aboutApp"><AboutApp /></Route>
                  <Route exact path="/place/create" component={PlaceCreateForm}/>
                  <Route exact path="/place/:placeid" component={PlaceById}/>
                  <Route path="/place/:id/update" component={PlaceUpdateForm}/>
                  <Route exact path="/"><WelcomePage /></Route>
                  <Route path="*" component={Page404} />
              </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
