import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';
import Customer from './Customer';
import '../style/_base.scss'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Customer /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;