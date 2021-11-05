const https = require("https");

exports.handler = async (event) => {
  const req = await new Promise((resolve, reject) => {
    https
      .get("https://quirky-northcutt-01be8c.netlify.app/one", (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          console.log(JSON.parse(data));
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  });

  return {
    statusCode: 200,
    body: "hello",
  };
};
