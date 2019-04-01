import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                                    <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
                                    <br/>
                                    <small>Posted on {auction.created_at.toLocaleString()}</small>
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