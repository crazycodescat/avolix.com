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

      console.log(res);

      if (res.status === 200) {
        return res;
      }
      if (res.status === 401) {
        return { data: "Please Re-Verify captcha" };
      }
    } catch (error) {}
  };
  return { sendRFQ };
};

export default useRFQ;
