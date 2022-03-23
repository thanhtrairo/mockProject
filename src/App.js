// import "./App.css";
import Navbar from "./components/header/Navbar";

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Home from "./pages/Home";
// import Products from "./pages/Products";
import Banner from "./components/banner/Banner";
import Products from './features/products/index'
import ProductDetail from "./features/products/Components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App w-full h-full relative">
        <Navbar />
        <Banner />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:productId" component={ProductDetail} />

          {/* <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
