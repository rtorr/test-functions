const testFolder = "./dist/";
const fs = require("fs");

const files = fs.readdirSync(testFolder);

console.log(files);

try {
  const data = fs.writeFileSync(
    "./netlify/functions/sites.json",
    JSON.stringify(files)
  );
  //file written successfully
} catch (err) {
  console.error(err);
}
