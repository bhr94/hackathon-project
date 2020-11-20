const express = require("express");
const router = express.Router();

router.get("/id", (req, res) => {
  res.json({ message: "Welcome to my server" });
});

// router.route("/users").get();
// router.route("/:id").get(userController.);

module.exports = router;
