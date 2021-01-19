import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Text>Welcome</Text>
      <Footer />
    </div>
  );
}

const Text = styled.h1`
  color: #fff;
`

export default App;
