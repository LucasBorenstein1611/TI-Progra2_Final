const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get("/", profileController.index);
router.get("/login", profileController.loginGet);
router.post("/login", profileController.loginPost);
router.get("/logout", profileController.logout);
router.get("/register", profileController.register);
router.get("/validate-email", profileController.validateEmail);
router.get("/validate-password", profileController.validatePassword);
router.post("/create", profileController.create);

module.exports = router;