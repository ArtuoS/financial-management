const Utilities = require("../utils/Utilities");
const UserRepository = require("../repositories/UserRepository");

const userRoute = app => {
  app
    .route("/user/:id")
    .get((req, res) => {
      var id = req.params.id;
      if (Utilities.isIdValid(id)) {
        let user = UserRepository.getUserById(id);
        console.log(user);
        return res.send(JSON.stringify(user));
      }
    })
    .post((req, res) => {});
};

module.exports = userRoute;
