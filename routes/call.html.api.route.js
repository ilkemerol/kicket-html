const express = require("express");
const router = express.Router();

const htmlApiController = require("../controllers/html.api.controller");

router.get("/:hash", htmlApiController.callStaticHtml);

module.exports = router;
