const lang = "index";

exports.handler = async (event) => {
  const foo = require(`./languages/${lang}.html`);
  console.log(foo);
  return {
    statusCode: 302,
    body: `Hello ${subject}!`,
  };
};
