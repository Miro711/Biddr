import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import AuctionShowPage from './AuctionShowPage';
import AuctionIndexPage from './AuctionIndexPage';
import NavBar from './NavBar';

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={WelcomePage} />
                    <Route path="/auctions/" exact component={AuctionIndexPage} />
                    <Route path="/auctions/:id" component={AuctionShowPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App; 
