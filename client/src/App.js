import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar.layouts";
import Home from "./components/pages/Home.pages";
import About from "./components/pages/About.pages";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ContactState from "./Context/Contact/ContactState";
import AuthState from "./Context/auth/authState";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <BrowserRouter>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </ContactState>
    </AuthState>
  );
};

export default App;
