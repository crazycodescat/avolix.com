import nodeMailer from '../utility/nodeMailer.js';

const mailer = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    partNumber,
    manufacturer,
    quantity,
    speacialInstructions,
  } = req.body;

  console.log(
    firstName,
    lastName,
    email,
    phoneNumber,
    partNumber,
    manufacturer,
    quantity,
    speacialInstructions
  );

  // HTML content with inline CSS
  const htmlContent = `
  <h1 style="color: green;">RFQ Details</h1>
  <table style="width: 100%; border-collapse: collapse;">
    <tr style="background-color: #f2f2f2;">
      <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Name</th>
      <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Email</th>
      <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Phone</th>
      <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Part Number</th>
      <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Manufacturer</th>
      <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Quantity</th>
      <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Special Instructions</th>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${firstName}&nbsp;${lastName}</td>
      <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${email}</td>
      <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${phoneNumber}</td>
      <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${partNumber}</td>
      <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${manufacturer}</td>
      <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${quantity}</td>
      <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${speacialInstructions}</td>
    </tr>
  </table>
`;

  const mailOptions = {
    from: `${email}`,
    to: process.env.GMAIL_ID,
    subject: `Quotation Request for ${partNumber}`,
    html: htmlContent,
  };

  try {
    const { status, message } = await nodeMailer(mailOptions);
    console.log(status, message, 32);
    if (status === 200) {
      res.status(200).send('Email Sent Successfully!');
    }
  } catch (error) {
    res.status(500).send('Error sending email. Please try again later.');
  }
};

export { mailer };
