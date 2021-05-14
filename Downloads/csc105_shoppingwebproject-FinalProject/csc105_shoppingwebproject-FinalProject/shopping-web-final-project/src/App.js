import React, { Component } from "react";
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
import { CartProvider } from "./components/CartContext";
import Profile from "./pages/Profile/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  handleCallback = (childData) => {
    this.setState({ data: childData });
  };

  addToCart(amount) {
    console.log(amount);
  }

  render() {
    const { data } = this.state;
    return (
      <CartProvider>
        <Router>
          <Navbar />
          <main>
            <Switch>
            <Route path="/" exact component={Home}/>
              <Route path="/shop" exact component={Shop}/>
              <Route path="/about" exact component={About}/>
              <Route path="/shopping-cart" exact component={Cart}/>
              <Route path="/newest" exact component={Newest}/>
              <Route path="/trends" exact component={Trends}/>
              <Route path="/search" exact component={Search}/>
              <Route path="/login" exact component={Login}/>              
              <Route path="/profile" exact component={Profile}/>   
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
      </CartProvider>
    );
  }
}
