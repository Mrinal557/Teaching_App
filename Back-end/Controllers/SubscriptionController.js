// controllers/subscriptionController.js
const User = require('../models/User');
const Lecture = require('../models/Lecture');
const TestSeries = require('../models/TestSeries');
const { initiatePayment, verifyPayment } = require('../services/PaymentService');

const calculatePrice = async (subject, section) =>
{
    let contentCount = 0, price = 0;
    if (section === 'videoLectures')
    {
        contentCount = await Lecture.countDocuments({ subject });
        price = contentCount * 1;
    } else if (section === 'testSeries')
    {
        contentCount = await TestSeries.countDocuments({ subject });
        price = contentCount * 150;
    }
    return price;
};

const createSubscription = async (req, res) =>
{
    const { subject, section } = req.body;
    const user = req.user;
    try
    {
        const price = await calculatePrice(subject, section);
        // const paymentDetails = await initiatePayment(price, "mrinal.annand@okhdfcbank");

        const paymentUrl = `upi://pay?pa=mrinal.anand@okhdfcbank&pn=Mrinal Anand&am=${price}&cu=INR`;
        res.status(200).json({ paymentUrl });
    } catch (error)
    {
        console.error('Error initiating payment:', error);
        res.status(500).json({ message: 'Error initiating payment' });
    }
};

const handlePaymentCallback = async (req, res) => {
    const { paymentId, userId, subject, section } = req.body;

    try {
        const isValid = await verifyPayment(paymentId);

        if (isValid) {
            const user = await User.findById(userId);

            if (!user.subscriptions[subject]) {
                user.subscriptions[subject] = {};
            }
            user.subscriptions[subject][section] = true;

            user.payments.push({
                subject,
                section,
                amount: await calculatePrice(subject, section),
            });

            await user.save();

            res.status(200).json({ message: 'Subscription created successfully' });
        } else {
            res.status(400).json({ message: 'Payment verification failed' });
        }
    } catch (err) {
        console.error('Error handling payment callback:', error);
        res.status(500).json({ message: 'Error handling payment callback' });
    }
};

const getSubscriptions = async (req, res) =>
{
    const user = req.user;
    res.status(200).json(user.subscriptions);
};

module.exports = { createSubscription, handlePaymentCallback, getSubscriptions };
