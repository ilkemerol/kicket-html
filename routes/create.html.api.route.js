const express = require("express");
const router = express.Router();

const htmlApiController = require("../controllers/html.api.controller");

router.post("/create", htmlApiController.createStaticHtml);

module.exports = router;
