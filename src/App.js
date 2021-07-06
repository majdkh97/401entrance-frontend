import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Favorite from './components/Favorite'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/favorite">
            <Favorite />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
