import React from 'react';
import ReactDOM from 'react-dom';
import { reducers } from './store/reducer';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux';








// store 
let store= createStore(reducers)







ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

