import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./Menu";
import { styled } from '@mui/material/styles';
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import ApiProducts from "./components/products/ApiProducts";
import User from "./components/User";
import CounterComponent from "./components/CounterComponent";
import About from "./components/About";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
  });

  const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }));

const Layout = () => {
    const [open, setOpen] = useState(false);
    const renderUser = (props: any) => {
        return <User {...props} message="This is User" />;
        };
    return (
        <RootStyle>

            <Header onOpenSidebar={() => setOpen(true)}/>
            <Menu/>
            <MainStyle>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component = {Home} />
                        <Route path="/apiproducts" component = {ApiProducts} />
                        <Route path="/user/:userid" render={renderUser} />
                        <Route path="/counter" component={CounterComponent} />
                        <Route path="/about" component = {About} />
                    </Switch>
                </div>
            </MainStyle>
        </RootStyle>
      );
}
export default Layout;