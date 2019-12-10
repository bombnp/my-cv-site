import React, { Component } from 'react';
import './App.css';

import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
import Works from "./components/Pages/Works"
import Awards from "./components/Pages/Awards"
import Projects from "./components/Pages/Projects"
import ContactMe from "./components/Pages/ContactMe"
import { Transition, Container } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    }
  }

  changeTab = (tabNumber) => {
    this.setState({
      activeTab: tabNumber
    })
  }

  render() { 
    const pages = [<Home />,<About changeTab={this.changeTab} />,<Works />,<Awards />,<Projects />,<ContactMe />]
    // let currentPage = pages[this.state.activeTab]

    let tmppages = pages.map((page, index) => {
      return (
        <Transition key={index} duration={{hide:0, show:300}} animation="fade up" visible={this.state.activeTab===index}>
          <Container fluid style={{height: "100%"}}>{page}</Container>
        </Transition>
      );
    })
    return ( 
      <div className="App" style={{backgroundColor:"#3a3535"}}>
        <Sidebar
        activeTab={this.state.activeTab}
        changeTab={this.changeTab} 
        />
				{/* {currentPage} */}
				{tmppages}

      </div>
    );
  }
}
 
export default App;
