import React from 'react';

import { Resume, Footer, Header, Skills , Testimonial, Work, AboutMe} from './container'
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header/>
      <AboutMe />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;