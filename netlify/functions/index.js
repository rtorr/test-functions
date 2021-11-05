const path = require("path");
const fs = require("fs");
const sites = require("./sites.json");

exports.handler = async (event) => {
  return {
    statusCode: 301,
    headers: {
      location: "https://www.google.com/",
    },
  };
};
