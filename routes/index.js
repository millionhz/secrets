const express = require('express');
const { ensureLoggedOut } = require('connect-ensure-login');

const router = new express.Router();

router.get('/', ensureLoggedOut('/secrets'), (req, res) => {
  res.render('home');
});

module.exports = router;
