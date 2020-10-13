import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storeFeatures from './components/Store';


ReactDOM.render(<App features={storeFeatures}/>, document.getElementById('root'));
