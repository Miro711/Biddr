import React from 'react';
import FormErrors from './FormErrors';

function NewBidForm(props) {

    const {errors = []} = props;

    function handleSubmit (event){
        event.preventDefault();

        const { currentTarget } = event;
        const fD = new FormData(currentTarget)

        props.onSubmit(
            {
                price: fD.get('price')
            }
        )
    }

    return (

        <div>
            <form className="BidForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="price">Price</label> <br />
                    <FormErrors noField forField="price" errors={errors} />
                    <textarea name="price" id="price" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
        </form>
      </div>
    );
}
export default NewBidForm;