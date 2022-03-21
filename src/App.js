// import "./App.css";
import Navbar from "./components/header/Navbar";

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <BrowserRouter>
      <div className="App w-full h-full relative">
        <Navbar />
        <Banner />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          {/* <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
