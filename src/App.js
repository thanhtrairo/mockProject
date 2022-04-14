// import "./App.css";
import Navbar from "./components/header/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css'

import Products from './features/products/index'
import ProductDetail from "./features/products/Components/ProductDetail";
import Cart from "./features/carts/index";
import Home from "./pages/Home";
import News from "../src/components/new/News";
import DetailNew from "./components/new/DetailNew";
import Login from "./features/users/Components/Login";
import Resgister from "./features/users/Components/Resgister";
import Profile from "./features/users/Components/Profile";
import ShippingAdress from "./features/carts/Components/ShippingAdress";
import PlaceOrderScreen from "./features/orders/Components/PlaceOrderScreen"
import OrderScreen from "./features/orders/Components/OrderScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App w-full h-full relative">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:productId" component={ProductDetail} />
          <Route exact path="/carts" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/resgister" component={Resgister} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/shipping" component={ShippingAdress} />
          <Route exact path="/placeOrderScreen" component={PlaceOrderScreen} />
          <Route exact path="/order/:orderId" component={OrderScreen} />

          <Route path="/news" exact>
              <News/>
          </Route>
          <Route path="/news/:id">
            <DetailNew/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
