const express = require('express');
const router = express.Router();
const { protectUser } = require('../middleware/authMiddleware');
const { createSubscription, getSubscriptions, handlePaymentCallback } = require('../Controllers/SubscriptionController');

router.post('/subscribe', protectUser, createSubscription);
router.get('/subscriptions', protectUser, getSubscriptions);
router.post('/payment-callback', handlePaymentCallback);
router.get('/test', protectUser, (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

module.exports = router;