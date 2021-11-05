const path = require("path");
const fs = require("fs/promises");

const d = "./dist";

exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  try {
    const files = await fs.readdir(d);
    for (const file of files) console.log(file);
  } catch (err) {
    console.error(err);
  }
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
