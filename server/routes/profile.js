const express = require("express");
const router = express.Router();

router.get("/id", (req, res) => {
  res.json(Signin());
});

router.route("/users").get(userController.);
router.route("/:id").get(userController.);

module.exports = router;