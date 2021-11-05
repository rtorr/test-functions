const testFolder = "./dist/";
const fs = require("fs");
const files = fs.readdirSync(testFolder);

console.log(`sites: ${files}`);

try {
  fs.writeFileSync("./netlify/functions/sites.json", JSON.stringify(files));
} catch (err) {
  console.error(err);
}
