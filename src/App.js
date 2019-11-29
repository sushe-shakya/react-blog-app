import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'
function App() {
  return (<div>
    <Navbar/>
    <Header/>
    <Container/>

    <hr/>
    <div className="clearfix">
      <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
    </div>
    <hr/>

    <Footer/>
  </div>);
}

export default App;
