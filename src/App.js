// import "./App.css";
import Navbar from "./components/header/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import Products from "./pages/Products";
import Products from './features/products/index'
import ProductDetail from "./features/products/Components/ProductDetail";
import Cart from "./features/carts/index";
import Home from "./pages/Home";
import Banner from "./components/banner/Banner";
import News from "../src/components/new/News";
import DetailNew from "./components/new/DetailNew";

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
          <Route exact path="/carts" component={Cart} />
          <Route path="/news" exact>
              <News/>
          </Route>
          <Route path="/news/:id">
            <DetailNew/>
          </Route>
        {/* <Banner /> */}
        
        
          {/* <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
