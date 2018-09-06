import React from 'react';

import ReactDOM from 'react-dom';
import 'babel-polyfill';

import Home from 'Pages/Home';

document.title = 'Sakarisson.com';

const App = () => (
  <Home />
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
