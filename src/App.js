import React, { Component } from 'react';
import './resources/styles.css';
import{Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/VenueInfo';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App" style={{height :"1500px"}}>
      
        <Header/>
  
        <Element name="featured">
        <Featured/>
        </Element>
        <Element name="venueInfo">
        <VenueInfo/>
        </Element>
        <Element name="highlights">
          <Highlight/> 
        </Element>
        <Element name="pricing">
        <Pricing/>
        </Element>
        <Element name="location">
        <Location/>
        </Element>
  
        <Footer/>

      </div>
    );
  }
}

export default App;
