import React from 'react';
import PlaceList from './Components/PlaceList';

import './App.css';

class App extends React.Component{

  state = {
    placeList : []
  }

  componentDidMount() {
    fetch('./database.json')
    .then(response => response.json())
    .then(data => this.setState({
      placeList: data
    }))
  }

  render() {
    return (
      <div className="App">
        <PlaceList placeListDetails={this.state.placeList}/>
      </div>
    );
  }
}

export default App;
