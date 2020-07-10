import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';
import SigninandSignup from './pages/signin-and-signup/signinandsignup.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          // console.log(this.state);
        }

    );
      }
      setCurrentUser({
        userAuth
      });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={Shoppage}/>
          <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/' />): (<SigninandSignup/>)
          } />
        </Switch>
        
      </div>
    );
  }

}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
