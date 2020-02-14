import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Wizard from './components/Wizard'
import StepOne from './components/StepOne'
import Steptwo from './components/Steptwo'
import Stepthree from './components/Stepthree'

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Wizard} path="/wizard" />
    <Route component={StepOne} path="/step1"/>
    <Route component={Steptwo} path="/step2"/>
    <Route component={Stepthree} path="/step3"/>
  </Switch>
);