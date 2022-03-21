import "./App.css";
import Navbar from "./components/header/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact conponent={Home} />
          <Route path="/sanpham" exact conponent={Product} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
