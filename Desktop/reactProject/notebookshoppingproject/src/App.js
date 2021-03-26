import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import Trends from "./pages/Trends/Trends";
import Newest from "./pages/Newest/Newest";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/shopping-cart" exact>
            <Cart />
          </Route>
          <Route path="/newest" exact>
            <Shop />
          </Route>
          <Route path="/trends" exact>
            <Shop />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
