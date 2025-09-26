"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe( process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = (props: Props) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: "eur",
        automatic_payment_methods: { enabled: true },
      });
      setClientSecret(paymentIntent?.client_secret);
    })();
  }, []);

  const stripePromise = loadStripe(
  );

  return (
    <div className="flex container mt-8">
      <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
