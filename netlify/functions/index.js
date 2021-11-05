exports.handler = async (event) => {
  return {
    statusCode: 302,
    headers: {
      location: "https://www.google.com/",
    },
  };
};
