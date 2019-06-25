const express = require("express");
const router = express.Router();

const htmlApiController = require("../controllers/html.api.controller");

router.get("/", htmlApiController.exampleRestApi);

module.exports = router;
