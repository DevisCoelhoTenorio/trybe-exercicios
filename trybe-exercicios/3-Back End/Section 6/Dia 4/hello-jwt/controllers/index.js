const ping = require('./ping');
const registerLogin = require('./login.controller');
const userMe = require('./user.controller');
const topSecret = require('./top_secret.controller');

module.exports = {
  ping,
  registerLogin,
  userMe,
  topSecret,
};
