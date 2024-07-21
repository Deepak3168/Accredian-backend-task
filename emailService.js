const sendMail = require('./gmail');

const sendReferralEmail = async (refereeEmail, courseName, yourName) => {
  const options = {
    to: refereeEmail,
    subject: `Referral for ${courseName}`,
    text: `You have been referred by ${yourName} for the course: ${courseName}.`,
    html: `<p>You have been referred by <strong>${yourName}</strong> for the course: <strong>${courseName}</strong>.</p>`,
    textEncoding: 'base64',
  };

  try {
    const messageId = await sendMail(options);
    console.log('Email sent successfully:', messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendReferralEmail;
