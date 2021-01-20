import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
