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
import MovieListing from "./components/MovieListing/MovieListing";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  return (
    <div className="App">
   <Router>
     <Switch>
       <Route path="/movie/:movieId">
         <MovieDetail />
       </Route>
       <Route path="/">
         <Header />
         <MovieListing />
         <MovieCard />
         <Footer />
       </Route>
     </Switch>
   </Router>
    </div>
  );
}

export default App;
