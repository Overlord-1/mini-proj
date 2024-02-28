const express = require("express");
const router = express.Router();
const { createUser, findUser } = require("../controllers/login");
router.route("/").post(createUser);
router.route("/:email").get(findUser);
module.exports = router;
