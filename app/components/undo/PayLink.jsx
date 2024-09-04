import React, { useEffect, useState } from "react";
import $ from "jquery"; // Only if you keep jQuery

const PayLink = ({ paymentData }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://jssdk.payu.in/bolt/bolt.min.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (scriptLoaded && window.bolt && paymentData) {
      const data = {
        key: "sZKiFE", // Replace with your actual key
        hash: paymentData.Hash,
        txnid: paymentData.txnid,
        amount: paymentData.amount,
        firstname: paymentData.firstname,
        email: paymentData.email,
        phone: paymentData.phone,
        productinfo: paymentData.productinfo || "payu test",
        surl:
          paymentData.surl ||
          "https://test-payment-middleware.payu.in/simulatorResponse",
        furl:
          paymentData.furl ||
          "https://test-payment-middleware.payu.in/simulatorResponse",
        enforce_paymethod:
          paymentData.enforce_paymethod || "creditcard|debitcard|HDFB|AXIB",
        display_lang: paymentData.display_lang || "English",
        drop_category: paymentData.drop_category || "creditcard|debitcard",
        pg: paymentData.pg || "CC",
        custom_note:
          paymentData.custom_note ||
          "You will be charged an extra amount of Rs 100 on this transaction",
      };

      const handlers = {
        responseHandler: function (BOLT) {
          if (BOLT.response.txnStatus === "SUCCESS") {
            console.log("Your payment has been successful");
          } else {
            console.log("Payment failed. Please try again.");
          }
        },
        catchException: function (BOLT) {
          console.log("Payment failed. Please try again.");
        },
      };

      window.bolt.launch(data, handlers);
    }
  }, [scriptLoaded, paymentData]);

  return null;
};

export default PayLink;
