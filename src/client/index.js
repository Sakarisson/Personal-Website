import React from 'react';

import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import 'babel-polyfill';

import Home from 'Pages/Home';

const App = () => (
  <Home />
);

ReactDOM.render(<App />, document.getElementById('root'));
ReactGA.initialize('UA-85011695-2');

export default App;
