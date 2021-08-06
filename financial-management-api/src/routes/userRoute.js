const Utilities = require("../utils/Utilities");
const User = require("../models/User");

const userRoute = app => {
  app
    .route("/user/:id?")
    .get((req, res) => {
      var id = req.params.id;
      if (Utilities.isIdValid(id)) {
        User.getById(id, result => {
          res.json(result);
        });
      } else {
        User.getAll(result => {
          res.json(result);
        });
      }
    })
    .post((req, res) => {
      var user = req.body;
      User.create(user, result => {
        res.status(200);
      });
      res.send(user);
    })
    .put((req, res) => {
      var user = req.body;
      var id = req.params.id;
      User.update(id, user, result => {
        res.status(200);
      });
    })
    .delete((req, res) => {
      var id = req.params.id;
      if (Utilities.isIdValid(id)) {
        User.delete(id, result => {
          res.status(200);
        });
      }
    });
};

module.exports = userRoute;
