import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import "./pages/homepage/homepage.styles.scss";
import Header from './components/header/header-component'
// const HatsPage =()=>(
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// )

function App() {
  return (
    // <div className="App">
    //   <div>
    //     <HomePage />
    //   </div>
    // </div>

    <div>
    <Header />
    <Switch>
       <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
    </Switch>
     
      
    </div>
  );
}

export default App;
