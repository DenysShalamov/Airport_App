import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <SearchPage />
    </BrowserRouter>
  </Provider>
);

export default App;
