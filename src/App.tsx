import React from "react";
import {Route, Switch } from "react-router";
import { BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import ApiProducts from "./components/products/ApiProducts";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/Store";
import CounterComponent from "./components/CounterComponent";

const App = () => {

    const renderUser = (props: any) => {
        return <User {...props} message="This is User" />;
        };
    return (
        <div className="grid-container">
            <Provider store={store()}>
                <BrowserRouter>
                    <Header />
                    <Menu />
                    <main className="grid-main">
                        <Switch>
                            <Route exact={true} path="/" component = {Home} />
                            <Route path="/apiproducts" component = {ApiProducts} />
                            <Route path="/user/:userid" render={renderUser} />
                            <Route path="/counter" component={CounterComponent} />
                            <Route path="/about" component = {About} />
                        </Switch>
                    </main>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
      );
}
export default App;