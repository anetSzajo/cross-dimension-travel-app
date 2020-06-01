import React from 'react';
// import PlaceList from './Components/PlaceList/PlaceList';

import Footer from './Components/Footer/Footer';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import './App.css';

class App extends React.Component{

  // state = {
  //   placeList : []
  // }

  // componentDidMount() {
  //   fetch('./database.json')
  //   .then(response => response.json())
  //   .then(data => this.setState({
  //     placeList: data
  //   }))
  // }

  render() {
    return (
      <div className="App">
        {/* <WelcomePage /> */}
        <DashboardPage  />
        <Footer />
        {/* <PlaceList placeListDetails={this.state.placeList}/> */}
      </div>
    );
  }
}

export default App;
