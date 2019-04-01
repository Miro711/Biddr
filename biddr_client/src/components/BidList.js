import React from 'react';
import BidDetails from './BidDetails';

function BidList(props) {    
    return(
        <ul className="no-bullets">
        {
            props.bids.map(bid => (
                <li key={bid.id}>
                    <BidDetails
                        price={bid.price}
                        // user={bid.user}
                        created_at={new Date(bid.created_at)}
                    />
                </li>
            ))
        }
    </ul>
    );
}

export default BidList;