import React from "react";
import {Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import ApiProducts from "./components/products/ApiProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";

import CounterComponent from "./components/CounterComponent";

const App = () => {

    const renderUser = (props: any) => {
        return <User {...props} message="This is User" />;
        };
    return (
        <main>
                    <Header />
                   
                    <div>
                        <Switch>
                            <Route exact={true} path="/" component = {Home} />
                            <Route path="/apiproducts" component = {ApiProducts} />
                            <Route path="/user/:userid" render={renderUser} />
                            <Route path="/counter" component={CounterComponent} />
                            <Route path="/about" component = {About} />
                        </Switch>
                    </div>
                    <Footer />
               
        </main>
      );
}
export default App;