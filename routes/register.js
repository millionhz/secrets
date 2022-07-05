const express = require('express');
const passport = require('../utils/auth');
const User = require('../models/user');
const { ensureLoggedOut } = require('connect-ensure-login');

const router = new express.Router();

router.use(ensureLoggedOut('/secrets'));

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
    successRedirect: '/secrets',
    failureRedirect: '/login',
  })
);

module.exports = router;
