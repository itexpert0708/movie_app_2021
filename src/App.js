import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routers/About";
import Home from "./routers/Home";
function  App(){
  return <HashRouter>
    <Route path="/about" exact={true}  component ={About}/>
    <Route path="/home"  exact={true}  component ={Home}/>
  </HashRouter>

}

export default App;