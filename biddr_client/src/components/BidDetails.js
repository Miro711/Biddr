import React from 'react';
import '../styles/BidDetails.css'

function BidDetails(props) {
    return (
        <div className="BidDetails">
            <p>
                {props.price} <br />
                {/* By {props.user.full_name} */}
            </p>
            <p>Bidded {props.created_at.toLocaleString()}</p>
        </div>
    );
}

export default BidDetails;