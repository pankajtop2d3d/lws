import React,{Component} from 'react';
import Home from './frontend/pages/home/home';
import Contact from './frontend/pages/contact/contact';
import About from './frontend/pages/about/about';
import Albums from './frontend/pages/albums/albums';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
function Routes() {
  return (
    <BrowserRouter>
      <Route exact={true} path='/' render={() => (
          <Home />
      )}/>
      <Route exact={true} path='/contact.html' render={() => (
          <Contact />
      )}/>
      <Route exact={true} path='/about.html' render={() => (
          <About />
      )}/>
      <Route exact={true} path='/albums.html' render={() => (
          <Albums />
      )}/>
  </BrowserRouter>
  );
}

export default Routes;