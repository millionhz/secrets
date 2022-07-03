const express = require('express');
const { ensureLoggedIn } = require('connect-ensure-login');

const router = express.Router();

router.get('/', ensureLoggedIn('/'), (req, res, next) => {
  req.logout((err) => {
    next(err);
  });
  res.redirect('/');
});

module.exports = router;
