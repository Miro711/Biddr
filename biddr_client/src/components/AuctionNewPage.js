import React, { Component } from 'react';
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';

class AuctionNewPage extends Component {
    constructor(props){
        super(props);
        this.createAuction = this.createAuction.bind(this);
    }

    createAuction(params) {
        Auction.create(params)
            .then((auction) => {
                this.props.history.push(`/auctions/${auction.id}`);
            });
    }

    render(){
        return(
            <main>
                <h1>Create an Auction</h1>
                <NewAuctionForm onSubmit={this.createAuction} />
            </main>
        );
    }
}

export default AuctionNewPage; 