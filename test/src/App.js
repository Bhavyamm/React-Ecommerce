import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import CartScreen from "./components/CartScreen";
import PlaceOrderScreen from "./components/PlaceOrderScreen";
import OrderPlacedScreen from "./components/OrderPlacedScreen";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/product/:id">
          <ProductScreen />
        </Route>
        <Route exact path="/cart">
          <CartScreen />
        </Route>
        <Route exact path = "/place-order">
          <PlaceOrderScreen />
        </Route>
        <Route exact path = "/order-placed">
          <OrderPlacedScreen />
        </Route>
        <Route exact path = "/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
