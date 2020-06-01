import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/global.css"; // reset css //
import "./css/app.css";

import { Provider } from "react-redux";
import { appStore } from "./store/store";

import Layout from "./components/Shared/Layout";
import About from "./components/About/About";
import Home from "./containers/Home";
import ProductDetail from "./containers/ProductDetail";
import AddProduct from "./containers/AddProduct";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/product/:id">
                <ProductDetail />
              </Route>
              <Route path="/add-product">
                <AddProduct />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

/*
Why should we choose redux or react context api?

We should not choose one over the other because it depends on use cases.

Like:

For low-frequency updates like locale, theme changes, 
etc. the React Context is perfectly fine. 

But with a more complex state which has high-frequency updates, 
the React Context won't be a good solution. Because, the React 
Context will trigger a re-render on each update, and optimizing it manually 
can be really tough. In this scenario Redux is much easier to implement.

Context doesn't give anything like the Redux DevTools where we can see our centralized state data.

Redux provide the ability to handle API request in Action creators easily.

So we can user redux and context api both in app. Because each one have some advantages over the other.
*/
