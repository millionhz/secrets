const express = require('express');
const { ensureLoggedIn } = require('connect-ensure-login');
const Secret = require('../models/secret');

const router = express.Router();

router.get('/', ensureLoggedIn('/login'), (req, res) => {
  res.render('submit');
});

router.post('/', ensureLoggedIn('/login'), (req, res) => {
  const { secret } = req.body;
  const { id } = req.user;

  Secret.addSecret(id, secret).then(() => {
    res.redirect('/secrets');
  });
});

module.exports = router;
