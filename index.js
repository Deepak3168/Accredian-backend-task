const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const sendReferralEmail = require('./emailService');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.post(
  '/api/referrals',
  [
    body('yourName').notEmpty().withMessage('Your name is required'),
    body('refereeName').notEmpty().withMessage('Referee\'s name is required'),
    body('refereeEmail').isEmail().withMessage('A valid referee email is required'),
    body('courseName').notEmpty().withMessage('Course name is required'),
  ],
  async (req, res) => {
    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { yourName, refereeName, refereeEmail, courseName } = req.body;

    try {
      // Save the referral information to the database
      const referral = await prisma.referral.create({
        data: {
          yourName,
          refereeName,
          refereeEmail,
          courseName,
        },
      });

      // Send a referral email
      await sendReferralEmail(refereeEmail, courseName, yourName);

      // Respond with the created referral
      res.status(201).json(referral);
    } catch (error) {
      console.error('Error creating referral:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
