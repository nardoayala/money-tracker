import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import 'normalize.css';

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
