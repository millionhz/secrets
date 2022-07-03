const express = require('express');
const { ensureLoggedIn } = require('connect-ensure-login');
const Secret = require('../models/secret');

const router = new express.Router();

router.get('/', ensureLoggedIn('/login'), (req, res) => {
  Secret.getAllSecrets().then((secrets) => {
    res.render('secrets', { secrets });
  });
});

module.exports = router;
