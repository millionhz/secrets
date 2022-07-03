const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/user');

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (username, password, done) => {
    User.authenticate(username, password)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => done(err));
  })
);

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.id });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

module.exports = passport;
