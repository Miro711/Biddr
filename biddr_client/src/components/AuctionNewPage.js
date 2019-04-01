import React, { Component } from 'react';
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';

class AuctionNewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            errors: [],
        };
        this.createAuction = this.createAuction.bind(this);
    }

    createAuction(params) {
        Auction.create(params)
            .then((data) => {
                if (data.errors) {
                    this.setState({
                        errors: data.errors
                    });
                } else {
                    this.props.history.push(`/auctions/${data.id}`);
                }
            });
    }

    render(){
        const { errors = [] } = this.state;
        return(
            <main>
                <h1>Create an Auction</h1>
                <NewAuctionForm onSubmit={this.createAuction} errors={errors} />
            </main>
        );
    }
}

export default AuctionNewPage; 