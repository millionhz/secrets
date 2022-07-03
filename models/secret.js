const mongoose = require('mongoose');

const secretSchema = mongoose.Schema({
  content: {
    type: String,
    required() {
      return this.content !== '';
    },
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

secretSchema.statics.getAllSecrets = function () {
  return this.find({}).select('content').exec();
};

secretSchema.statics.addSecret = function (userId, content) {
  return new this({ content, author: userId }).save();
};

module.exports = mongoose.model('secret', secretSchema);
