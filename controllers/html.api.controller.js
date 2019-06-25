const htmlApiService = require("../services/html.api.service");

exports.createStaticHtml = async function(req, res, next) {
  var serviceResponse = await htmlApiService.createStaticHtml(req);
  return res.status(200).json({
    platform: "html",
    endpoint: serviceResponse
  });
};

exports.callStaticHtml = async function(req, res, next) {
  var serviceResponse = await htmlApiService.callStaticHtml(req);
  return res.status(200).send(serviceResponse);
};

exports.exampleRestApi = async function(req, res, next) {
  var serviceResponse = await htmlApiService.exampleRestApi();
  return res.status(200).json(serviceResponse);
};
