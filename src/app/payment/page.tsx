"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
  LinkAuthenticationElement,
  AddressElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe( process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function CheckoutForm({ clientSecret }: { clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/success`,
      },
      redirect: "if_required",
    });

    if (error) setMessage(error.message || "Payment failed");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Optional email field powered by Stripe Link */}
      <LinkAuthenticationElement id="link-auth" />
      {/* Optional billing address */}
      <AddressElement options={{ mode: "billing" }} />
      {/* The actual payment form (card, Apple Pay, etc.) */}
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full rounded-md bg-black px-3 py-2 text-white disabled:opacity-50"
      >
        {loading ? "Processing..." : "Pay now"}
      </button>
      {message && <p className="text-sm text-red-600">{message}</p>}
    </form>
  );
}

export default function PayPage({ params }: { params: { chefId: string } }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // fetch amount from your backend (e.g., based on chefId and selected slot)
    (async () => {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 1, // $50.00 (replace with your price logic)
          currency: "usd",
          metadata: { chefId: params.chefId, slot: "2025-10-03T18:00:00Z" },
        }),
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    })();
  }, [params.chefId]);

  if (!clientSecret) return <div>Loading payment form…</div>;

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: { theme: "stripe" },
      }}
    >
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
}
