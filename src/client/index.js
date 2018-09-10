import React from 'react';

import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import 'Styles/Global';

import 'babel-polyfill';

import Home from 'Pages/Home';

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 570px 1fr;
  grid-template-rows: 1fr 100px 2fr;

  @media (max-width: 570px) {
    grid-template-columns: 5% 90% 5%;
  }

  grid-template-areas:
    "header header header"
    "left middle right"
    "footer footer footer"
`;

const App = () => (
  <Root>
    <Home />
  </Root>
);

ReactDOM.render(<App />, document.getElementById('root'));
ReactGA.initialize('UA-85011695-2');
ReactGA.pageview(window.location.pathname + window.location.search);

export default App;
