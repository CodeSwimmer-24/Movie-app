import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import {createContext, useReducer} from "react";
import AdminPage from "./components/AdminPage";
import {initialState,reducer} from "./reducer/UseReducer";
import HomePage from './components/HomePage';
export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div className="App">
      <userContext.Provider value={{state,dispatch}}>
      <Router>
        <Switch>
          <Router path="/home">
            <HomePage />
          </Router>
          <Route path="/admin">
            <AdminPage />
            </Route>
          <Route path="/">
            <LoginPage />
           </Route>
        </Switch>
        </Router>
        </userContext.Provider>
    </div>
  );
}

export default App;
