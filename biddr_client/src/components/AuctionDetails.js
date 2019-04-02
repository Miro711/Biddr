import React from 'react';

function AuctionDetails(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                {props.description}<br/>
                By: {props.seller.full_name}<br/>
                Current Price: ${props.reserve_price}<br />
                Ends at: {props.ends_at}
            </p>
            <p>
                <small>Created {new Date(props.created_at).toLocaleString()}</small>
            </p>
        </div>
    );
}

export default AuctionDetails;