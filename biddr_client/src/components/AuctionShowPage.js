import React, { Component } from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import NewBidForm from './NewBidForm';
import '../styles/page.css';
import { Auction, Bid } from '../requests';

class AuctionShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            auction: null,
            isLoading: true,
            errors: [],
        }
        this.createBid = this.createBid.bind(this);
    }

    createBid(params){
        Bid.create(this.props.match.params.id, params).then(data => {
            if (data.errors) {
                this.setState({
                    errors: data.errors
                });
            } else if (data.status === 401) {
                this.props.history.push(`/sign_in`);
            } else {
                Bid.one(this.props.match.params.id, data.id).then(bid => {
                    let temp = {...this.state.auction};
                    temp.bids=[bid].concat(this.state.auction.bids);
                    this.setState({auction: temp});
                });
            }
        });
    }

    componentDidMount() {
        Auction.one(this.props.match.params.id).then((auction) => {
            this.setState({
                auction: auction,
                isLoading: false,
            });
        });
    }

    render(){
        const { auction, isLoading, errors } = this.state;
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
                <NewBidForm onSubmit={this.createBid} errors={errors}/>
                <h2>Previous Bids</h2>
                <BidList bids={auction.bids} />
                
            </main>
        );
    }
}

export default AuctionShowPage;