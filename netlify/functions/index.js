const path = require("path");
const fs = require("fs");

const d = "./";

const read = function (dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      console.log(err, files);
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
};

exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  try {
    const files = await read(d);
    for (const file of files) console.log(file);
  } catch (err) {
    console.error(err);
  }
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
