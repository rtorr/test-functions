const lang = "index";

exports.handler = async (event) => {
  const foo = require(`./sites/${lang}.html`);
  return {
    statusCode: 302,
    body: foo,
  };
};
