import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AboutUs from "../pages/AboutUs.js";
import Calc from "../pages/Calculator.js";
import UserProfile from "../pages/UserProfile.js";
import MainPage from '../pages/MainPage.js'
import Register from "../pages/Register.js";
import SignIn from "../pages/SignIn.js";
import Portfolio from "../pages/Portfolio.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/calculator'>
        <Calc/>
      </Route>
      <Route path='/register'>
        <Register/>
      </Route>
      <Route path='/signIn'>
        <SignIn/>
      </Route>
      <Route path='/info'>
        <UserProfile/>
      </Route>
      <Route path='/about'>
        <AboutUs/>
      </Route>
      <Route path='/portfolio'>
        <Portfolio/>
      </Route>
      <Route path=''>
        <MainPage/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
