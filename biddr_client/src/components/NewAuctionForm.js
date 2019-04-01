import React from 'react';
import FormErrors from "./FormErrors";

function NewAuctionForm(props) {
	const { errors } = props;

    function handleSubmit(event){
        event.preventDefault();
		const { currentTarget } = event;
        const fD = new FormData(currentTarget);
        props.onSubmit({
			title: fD.get('title'),
            description: fD.get('description'),
            reserve_price: fD.get('reserve_price'),
            ends_at: fD.get('ends_at')
		});
	}
	
	return (
		<form className="NewAuctionForm" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title</label><br />
				<FormErrors errors={errors} forField="title"/>
				<input name="title" id="title" />
			</div>
			<div>
				<label htmlFor="description">Description</label><br />
				<FormErrors errors={errors} forField="description"/>
				<textarea name="description" id="description" />
			</div>
            <div>
                <label htmlFor="ends_at">Ends at</label> <br />
				<FormErrors errors={errors} forField="ends_at"/>
                <textarea name="ends_at" id="ends_at" placeholder="e.g. 2019-12-12" cols="60" rows="4" />
            </div>
                <div>
                    <label htmlFor="reserve_price">Reserve Price</label> <br />
					<FormErrors errors={errors} forField="reserve_price"/>
                    <textarea name="reserve_price" id="reserve_price" placeholder="e.g. 500 (Integer without $ sign)" cols="60" rows="4" />
            </div>
			<div>
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

export default NewAuctionForm;