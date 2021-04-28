import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ServicePurchase from "./pages/ServicePurchase";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "antd/dist/antd.css";

export default function Appdr() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/service-purchase">
          <ServicePurchase />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}
