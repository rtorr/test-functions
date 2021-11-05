const https = require("https");

const sites = require("./sites.json");

exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  let res = "";
  try {
    const req = await new Promise((resolve, reject) => {
      https
        .get(
          `https://quirky-northcutt-01be8c.netlify.app/${
            items[Math.floor(Math.random() * items.length)]
          }`,
          (resp) => {
            let data = "";

            // A chunk of data has been received.
            resp.on("data", (chunk) => {
              data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on("end", () => {
              resolve(data);
            });
          }
        )
        .on("error", (err) => {
          reject("Error: " + err.message);
        });
    });
    res = req;
  } catch (e) {}

  return {
    statusCode: 200,
    body: res,
  };
};
