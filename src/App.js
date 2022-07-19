import React from 'react';
import './App.css';
import Home from './Home.js';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
// import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(){
  super()
  this.state = {page:{label:"Home", hash:"home"},};
  window.location.href="#/" + this.state.page.hash

  this.changePageState=  this.changePageState.bind(this)
}

changePageState(page){
  console.log('sto cambiando stato applicazione', page)
  
  const newState = {page: {label : page , hash: page.toLowerCase()}}
  this.setState(newState)
  window.location.href = "#/" + page.toLowerCase()

}
render(){
  return(
    <div className='app'>
      <Navbar state ={this.state} clickCallback ={this.changePageState} label={[{name: "home"},{ name :"about"}]} />
      {this.state.page.hash === "home" && <Home />}
      {this.state.page.hash === "about" && <About />}
      <Footer state ={this.state} clickCallback ={this.changePageState}/>
    </div>
    )
  }
}

export default App;
