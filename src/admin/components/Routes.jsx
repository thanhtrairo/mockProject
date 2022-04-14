import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/customers/Customers";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import AddEdit from "../pages/users/add/AddEdit";
import AddProduct from "../pages/products/addProduct/AddProduct";
import OrderList from "../pages/order/OrderList";


const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" exact component={Dashboard} />
      <Route path="/admin/customers" exact component={Customers} />

      <Route path="/admin/products" exact component={Products} />
      <Route path="/admin/products/add" component={AddProduct} />

      <Route path="/admin/user" exact component={Users} />
      <Route path="/admin/user/add" component={AddEdit} />
      <Route path="/admin/user/edit/:id" component={AddEdit} />
      <Route path="/admin/order" component={OrderList} />

    </Switch>
  );
};

export default Routes;
