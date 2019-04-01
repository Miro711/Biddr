import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import AuctionShowPage from './AuctionShowPage';
import AuctionIndexPage from './AuctionIndexPage';
import NavBar from './NavBar';
import SignInPage from './SignInPage';
import { User } from '../requests';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            isLoading: true,
        }
        this.getUser = this.getUser.bind(this);
    }

    getUser(){
        User.current()
        .then(data => {
            if (typeof data.id !== "number") {
                this.setState({ isLoading: false });
            } else {
                this.setState({ currentUser: data, isLoading: false});
            }
        });
    }

    componentDidMount(){
        this.getUser();
    }

    render(){
        const { isLoading, currentUser } = this.state;
        
        if (isLoading) {
            return <div/>
        }

        return (
            <BrowserRouter>
                <div>
                    <NavBar currentUser={currentUser}/>
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />
                        <Route path="/auctions/" exact component={AuctionIndexPage} />
                        <Route path="/auctions/:id" component={AuctionShowPage} />
                        <Route path="/sign_in" render={routeProps => (
                                <SignInPage onSignIn={this.getUser} {...routeProps}/>
                            )} 
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App; 
