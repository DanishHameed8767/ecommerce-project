import { loadStripe } from '@stripe/stripe-js';
import "./checkout.css";
import React from 'react'
import CheckoutForm from './CheckoutForm';
import { selectClientSecret } from '../orderSlice';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

export default function Checkout() {
    const clientSecret = useSelector(selectClientSecret) || "";
    console.log(clientSecret);
    const appearance = {
        theme: "flat",
        variables: {
          colorPrimary: "#0570de",
          colorBackground: "#ffffff",
          colorText: "#30313d",
          colorDanger: "#df1b41",
          fontFamily: "Ideal Sans, system-ui, sans-serif",
          spacingUnit: "2px",
          borderRadius: "4px",
        },
      };
      const options = { clientSecret, appearance };
  return (
    <>
    <div className="stripe-container container d-flex justify-content-center align-items-center">
    {clientSecret && (<Elements options={options} stripe={stripePromise}>
        <CheckoutForm />
    </Elements>)}
    </div>
    </>
  )
}


const stripePromise = loadStripe(
    "pk_test_51PGDu1AtJUUgElglXf87pv4O6rs5oaZlomCL7qQJgeeuLEPRsm23SLwLC2MVrgaKXCdVWTqeO5fMeTnBDYyasIxT00ZzzuBslV"
  );