import React from 'react'

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100
    const publishableKey = 'pk_test_51GwytxK3QJam9SkwY72wdEq9kE5Nk5viU2kfcq2oyLv4nUWXXRyYdfSiqGIuPMzWCaOrRi6qX5darClJQT5gEz4400gqWbwRMy'
   const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        panelLabel='Pay Now'
        amount={priceForStripe} // cents
        // currency="USD"
        stripeKey={publishableKey}
        // locale="zh"
        // email="info@vidhub.co"
        image='https://svgshare.com/i/CUz.svg'
        billingAddress
        shippingAddress
        description={`Your Storal is $${price}`}
        token={onToken} // submit callback
    


        />
    )

}

export default StripeCheckoutButton;
