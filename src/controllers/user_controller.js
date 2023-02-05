const db = require('../models');
const User = db.wav.models.user;

exports.getUser = async (req, res) => {
    res.send({
        message: 'This is working!',
    });
};