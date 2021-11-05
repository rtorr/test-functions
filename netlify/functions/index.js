const https = require("https");

const sites = require("./sites.json");

exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  console.log("coooooooooool", sites);
  let res = "";
  const site = sites[Math.floor(Math.random() * items.length)];
  try {
    const req = await new Promise((resolve, reject) => {
      https
        .get(`https://quirky-northcutt-01be8c.netlify.app/${site}`, (resp) => {
          let data = "";

          // A chunk of data has been received.
          resp.on("data", (chunk) => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on("end", () => {
            resolve(data);
          });
        })
        .on("error", (err) => {
          reject("Error: " + err.message);
        });
    });
    res = req;
  } catch (e) {}
  console.log("nice", res, site);
  return {
    statusCode: 200,
    body: res,
  };
};
