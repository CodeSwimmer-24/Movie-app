import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetails/MovieDetail"

function App() {
  return (
    <div classNamame="app">
          <Header />
      <Router>
        <Switch>
          <Route path="/">
           <Home />
          </Route>
          <Route path="/movie/:imdbID" component={MovieDetail} />
        </Switch>
      </Router>
          <Footer />
    </div>
  )
}

export default App

