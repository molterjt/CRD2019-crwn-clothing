import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css'
import Header from './components/header/header.comp';
import {HomePage} from './pages/homepage/homepage.comp'
import ShopPage from './pages/shoppage/shoppage.comp'
import Registration from './pages/registration/registration.comp'
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            currentUser: null,
        }
    }
    unsubscribeFromAuth = null;

    componentDidMount(){
        //an open subscription
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render(){
     return (
         <div>
            <Header currentUser={this.state.currentUser}/>
             <Switch>
                 <Route exact path='/' component={HomePage} />
                 <Route path='/shop' component={ShopPage} />
                 <Route path='/signin' component={Registration} />
             </Switch>
         </div>
     );
 }
}

export default App;
