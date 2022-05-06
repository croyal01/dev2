import React from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Welcome from "./Welcome";
import About from "./About";
import MgtServices from "./MgtServices";
import Footer from "./Footer";



function App() {
  return (
    <div>  
    <header className="App-header">
      <Header />
      <About />
      <Welcome />
      <MgtServices />
      <Footer /> 
      </header>
    </div>
    
  );
}
 /*
 <div className="App">  
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
        </div>  
  */
export default App;
