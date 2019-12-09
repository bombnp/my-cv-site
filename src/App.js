import React, { Component } from 'react';
import './App.css';

import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./components/Pages/Home"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  changeTab = (tabNumber) => {
    this.setState({
      activeTab: tabNumber
    })
  }

  render() { 
    const pages = [Home]
    let currentPage = pages[this.state.activeTab]
    return ( 
      <div className="App">
        <Sidebar
        activeTab={this.state.activeTab}
        changeTab={this.changeTab} 
        />
        {currentPage}
      </div>
    );
  }
}
 
export default App;
