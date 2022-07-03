const express = require('express');
const passport = require('../utils/auth');
const User = require('../models/user');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post(
  '/',
  (req, res, next) => {
    User.addUser(req.body.email, req.body.password)
      .then(() => {
        next();
      })
      .catch((err) => {
        res.redirect('/register');
        next(err);
      });
  },
  passport.authenticate('local', {
    successReturnToOrRedirect: '/secrets',
    failureRedirect: '/login',
  })
);

module.exports = router;
