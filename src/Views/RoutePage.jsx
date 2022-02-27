import React from "react";
import { Route,Switch } from "react-router-dom";
import CareerForm from "./CareerForm";
import Career from "./Career";
const RoutePage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Bs_group_Live_project" component={Career}></Route>
        <Route exact path="/careerform" component={CareerForm}></Route>
      </Switch>
    </div>
  );
};

export default RoutePage;
