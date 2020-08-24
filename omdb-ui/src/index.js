import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

//const proxyurl = "https://cors-anywhere.herokuapp.com/";
//const url = "http://localhost:3000"; // site that doesn’t send Access-Control-*
//fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
//.then(response => response.text())
//.then(contents => console.log(contents))
//.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
