import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css'
import Header from './components/header/header.comp';
import {HomePage} from './pages/homepage/homepage.comp'
import ShopPage from './pages/shoppage/shoppage.comp'
import Registration from './pages/registration/registration.comp'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await  createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, () => {
                        console.log(this.state);
                    }
                    );
                });
            }
            this.setState({currentUser: userAuth});

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
