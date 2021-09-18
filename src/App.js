import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route path="/" component={Home} />
        <Route path="/movie/:imdbID" component={MovieDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
