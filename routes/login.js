const express = require('express');
const passport = require('../utils/auth');

const router = new express.Router();

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/secrets');
  } else {
    res.render('login');
  }
});

router.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/secrets',
    failureRedirect: '/login',
  })
);

module.exports = router;
