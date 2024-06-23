import React from "react";
import axios from "axios";

const useRFQ = () => {
  const sendRFQ = async (formData) => {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    // Format the body as x-www-form-urlencoded
    const body = new URLSearchParams(formData);

    try {
      const res = await axios.post("http://127.0.0.1:8080/api/rfq/", body, {
        headers,
      });
    } catch (error) {}
  };
  return { sendRFQ };
};

export default useRFQ;
