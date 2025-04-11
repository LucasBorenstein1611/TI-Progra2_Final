const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get("/", profileController.index);
router.get("/login", profileController.login);
router.get("/register", profileController.register);

module.exports = router;