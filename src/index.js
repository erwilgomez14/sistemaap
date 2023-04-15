import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './context/reducer';
import { BrowserRouter as Router } from "react-router-dom";
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById('root')   
);

