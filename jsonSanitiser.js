const fs = require("fs");
const readline = require("readline");

// Path to the (example) Newline Delimited JSON file
// This is the file that needs modification
const path = "./NEWLINE_JSON.json";

const rl = readline.createInterface({
  input: fs.createReadStream(path),
  terminal: false
});

/**
 * Function to read the JSON data
 */
const readJson = () => {
  const jsonData = [];
  return new Promise(resolve => {
    rl.on("line", line => {
      jsonData.push(JSON.parse(line));
    });
    rl.on("close", () => {
      resolve(jsonData);
    });
  });
};

readJson()
  .then(data => {
    const response = [];
    for (const exchange of data) {
      // Sanitise data here
      exchange["MODIFY_DATA_HERE"] = null;
      response.push({
        // Sanitised data goes here
      });
    }
    // Stringify the JSON
    const fileRes = JSON.stringify(response);
    fs.writeFile("output.json", fileRes, "utf8", err => {
      if (err) {
        console.log("Error while writing to new file...");
      }
      console.log("Done.");
    });
  })
  .catch(err => {
    // TODO handle error here
    console.log(err);
  });
