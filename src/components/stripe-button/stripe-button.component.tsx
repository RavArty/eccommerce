import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface IStripeCheckoutButtonProps {
  price: number;
}
const StripeCheckoutButton = ({ price }: IStripeCheckoutButtonProps) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_OAzemdAf2abLRoju9oIdBLNm00UTQCP99s';

  const onToken = (token: Token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
