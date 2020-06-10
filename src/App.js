import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shoppage}/>
      </Switch>
      
    </div>
  );
}

export default App;
