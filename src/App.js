import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';
import SigninandSignup from './pages/signin-and-signup/signinandsignup.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({ currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={Shoppage}/>
          <Route exact path='/signin' component={SigninandSignup} />
        </Switch>
        
      </div>
    );
  }

}

export default App;
