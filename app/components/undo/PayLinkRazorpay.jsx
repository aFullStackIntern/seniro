import React, { useEffect, useState } from "react";

const PayLinkRazorpay = ({ paymentData }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (scriptLoaded && paymentData) {
      const options = {
        key: "rzp_test_eAQjRaiVNhy8ms", // Replace with your actual key
        amount: paymentData.amount,
        currency: "INR",
        name: paymentData.name,
        order_id: paymentData.order_id,
        handler: function (response) {
          alert(`Payment successful: ${response.razorpay_payment_id}`);
        },
        prefill: paymentData.prefill,
        notes: paymentData.notes,
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  }, [scriptLoaded, paymentData]);

  return null;
};

export default PayLinkRazorpay;
