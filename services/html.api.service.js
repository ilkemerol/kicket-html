const randomstring = require("randomstring");
const fs = require("fs");
const logger = require("../utils/kicket.logger");

const gitService = require("../services/git.service");

exports.createStaticHtml = async function(req) {
  userFile = req.body;
  const uuid = randomstring.generate({ length: 32, charset: "alphabetic" });
  fs.mkdirSync("./codes/" + uuid, { recursive: true }, err => {
    if (err) throw err;
  });
  fs.appendFileSync("./codes/" + uuid + "/" + uuid + ".html", userFile);
  logger.doit("Create folder and file with UUID: " + uuid);
  gitService.pushFile(uuid);
  return uuid;
};

exports.callStaticHtml = async function(req) {
  const uuid = req.params.hash;
  if (!fs.existsSync("./codes/" + uuid + "/" + uuid + ".js")) {
    const json = {
      kicketCode: "N998",
      kicketType: "error",
      kicketMessage: "No Such File"
    };
    return json;
  }
  logger.doit("Running UUID: " + uuid);
  return fs.readFileSync("./codes/" + uuid + "/" + uuid + ".html", {
    encoding: "utf-8"
  });
};

exports.exampleRestApi = async function() {
  const json = {
    exampleCode:
      '<html lang="en"><head> <meta http-equiv="content-type" content="text/html; charset=utf-8"><title>Title Goes Here</title></head><body><p>This is my web page</p></body></html>',
    exampleRequest: '{"customVariable": "myVariablea"}'
  };
  return json;
};
