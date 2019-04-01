import React, { Component } from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import '../styles/page.css';
import { Auction } from '../requests';

class AuctionShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            auction: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        Auction.one(1).then((auction) => {
            this.setState({
                auction: auction,
                isLoading: false,
            });
        });
    }

    render(){
        const { auction, isLoading } = this.state;
        if (isLoading) {
			return (
				<main>
					<h3>Loading...</h3>
				</main>
			);
        }
        if (!auction) {
			return (
				<main>
					<h1>Auction does not exist!</h1>
				</main>
			);
        }
        return(
            <main>
                <AuctionDetails {...auction}/>
                <h2>Bids</h2>
                <BidList bids={auction.bids} />
                
            </main>
        );
    }
}

export default AuctionShowPage;