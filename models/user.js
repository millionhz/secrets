const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'email invalid',
    },
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.addUser = async function (email, password) {
  const hash = await bcrypt.hash(password, 10);
  return new this({ email, password: hash }).save();
};

userSchema.statics.authenticate = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    return null;
  }

  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    return null;
  }

  return user;
};

async function devInit() {
  const User = mongoose.model('user', userSchema);
  // User.deleteMany({}).exec();
  module.exports = User;
}

devInit();
