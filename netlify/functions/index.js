const fs = require("fs");

const lang = "index";

exports.handler = async (event) => {
  const foo = fs.readFileSync(require.resolve(`./sites/${lang}.html`));
  return {
    statusCode: 302,
    body: foo,
  };
};
