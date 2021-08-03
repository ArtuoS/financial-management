const User = require("../models/User");

class UserRepository {
  static getUserById(id) {
    return User.getUserById(id);
  }
}

module.exports = UserRepository;
