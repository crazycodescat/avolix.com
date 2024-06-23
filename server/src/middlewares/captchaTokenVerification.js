import axios from "axios";

const captchaTokenVerification = async (req, res, next) => {
  const token = req.body.token;

  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const response = await axios.post(
      `${process.env.GOOGLE_RECAPTCHA_VERIFICATION_BASE_ENDPOINT}secret=${process.env.SECRET_KEY}&response=${token}`
    );

    // Check response status and send back to the client-side
    if (!response.data.success) {
      res.status(401).send("Captacha Authentication Failed");
    }
    if (response.data.success) {
      next();
    }
  } catch (error) {
    res.status(500).send("Error verifying reCAPTCHA");
  }
};

export default captchaTokenVerification;
