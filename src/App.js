
import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Nav from './Nav';

class App extends React.Component {
  constructor() {
    super()
    this.state = { page: { label: "Home", hash: "home" } }
    window.location.href = "#/" + this.state.page.hash
  }



  render() {
    return (
      <div className='app'>
        <Nav state={this.state} />
        {this.state.page.label === "Home" && <Home />}
        {this.state.page.label === "About" && <About />}
      </div>

    );
  }


}
export default App;
