import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Login from './components/Login';
import Register from './components/Register';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById("root");
// ReactDOM.render(<Login />,container);
ReactDOM.render(<Register />,container);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
