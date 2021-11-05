const lang = "index";

exports.handler = async (event) => {
  const { greeting } = require(`./languages/${lang}.html`);
  console.log(greetings);
  return {
    statusCode: 302,
    body: `Hello ${subject}!`,
  };
};
