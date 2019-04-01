import React, { Component } from 'react';
import { Auction } from '../requests';
class AuctionIndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            auctions: [],
            isLoading: true,
        }
    }

    componentDidMount(){
        Auction.all().then((auctions) => {
            this.setState({
                auctions: auctions,
                isLoading: false,
            });
        });
    }

    render(){
        const { auctions, isLoading } = this.state;
        if (isLoading) {
			return (
				<main>
					<h3>Loading...</h3>
				</main>
			);
		}
        return(
            <main>
                <h1>Auctions</h1>
                <ul>
                    {
                        auctions.map(auction => (
                            <li key={auction.id}>    
                                <p>
                                    {auction.title}
                                    <br/>
                                    <small>Created {auction.created_at.toLocaleString()}</small>
                                </p>
                            </li>
                        ))
                    }    
                </ul>
</main>
        );
    }
}

export default AuctionIndexPage;