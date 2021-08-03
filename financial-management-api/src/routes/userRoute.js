const Utilities = require("../utils/Utilities");
const User = require("../models/User");

const userRoute = app => {
  app
    .route("/user/:id")
    .get((req, res) => {
      var id = req.params.id;
      if (Utilities.isIdValid(id)) {
        User.getUserById(id, result => {
          res.send(JSON.stringify(result));
        });
      }
    })
    .post((req, res) => {
      var user = res.body.FIRST_NAME;
      console.log(user.FIRST_NAME);
      res.send(user);
    });
};

module.exports = userRoute;
