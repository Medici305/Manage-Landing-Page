import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Advert from './components/Advert';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Product from './pages/Product';
import ContactUs from './pages/ContactUs';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/pricing'>
          <Pricing />
        </Route>
        <Route path='/product'>
          <Product />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route path='/faq'>
          <Faq />
        </Route>
        <Route path='/contact-us'>
          <ContactUs />
        </Route>
      </Switch>
      <Advert />
      <Footer />
    </div>
  );
}

export default App;
